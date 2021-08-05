<template>
  <div class="game-screen">
    <button class="quit" @click="quit">
      {{ $t("ABORT") }}
    </button>
    <ScoreLine
      :result="result"
      :timeLeft="timeLeft"
      :isInfiniteRound="!options.gameLength"
    />

    <FeedbackLine :feedback="feedback" :uniqueId="numAnswers" />
      <RealDeviceInput @solved="checkAnswer" />
      <NoteDisplay :currentExercise="currentExercise" />
  </div>
</template>

<script>
import ScoreLine from './ScoreLine'
import NoteDisplay from './NoteDisplay'
import FeedbackLine from './FeedbackLine'
import RealDeviceInput from './RealDeviceInput'

import Options from '../model/Options'
import Statistics from '../model/Statistics'

import GetRandomNote from '../service/clefRange'

import * as _ from 'lodash'

export default {
  name: 'Game',
  components: {
    ScoreLine,
    NoteDisplay,
    FeedbackLine,
    RealDeviceInput
  },
  data () {
    return {
      options: Options,
      currentExercise: {
        clef: 'treble',
        value: 36,
        isSharp: false
      },
      numCorrect: 0,
      numWrong: 0,
      timeLeft: 0,
      timer: null,
      feedback: 'none',
      sample: null
    }
  },
  computed: {
    numAnswers () {
      return this.numCorrect + this.numWrong
    },
    accuracy () {
      if (this.numAnswers === 0) {
        return 0
      }
      return Math.round(100 * this.numCorrect / this.numAnswers)
    },
    score () {
      if (this.numAnswers === 0) {
        return 0
      }
      return Math.round(this.baseFactor * this.numCorrect * this.numCorrect / this.numAnswers)
    },
    baseFactor () {
      // 20s -> 300, 1min -> 100, 5min -> 20
      return this.options.gameLength ? (6000 / this.options.gameLength) : 0
    },
    result () {
      return {
        numAnswers: this.numAnswers,
        numCorrect: this.numCorrect,
        numWrong: this.numWrong,
        accuracy: this.accuracy,
        score: this.score
      }
    }
  },
  methods: {
    startGame () {
      this.numCorrect = 0
      this.numWrong = 0
      this.timeLeft = this.options.gameLength
      if (this.options.gameLength) {
        this.timer = setInterval(() => {
          this.timeLeft -= 1
          if (this.timeLeft < 0) {
            this.onGameFinished()
          }
        }, 1000)
      }
      this.generateNewExercise()
    },
    onExit () {
      clearInterval(this.timer)
      if (this.sample) {
        this.sample.pause()
      }
    },
    onGameFinished () {
      this.onExit()
      Statistics.addScore(this.score)
      this.$emit('gameEnded', this.result)
    },
    quit () {
      this.onExit()
      this.$emit('gameEnded', null)
    },
    generateNewExercise () {
      let exercise = this.currentExercise
      while (exercise.value === this.currentExercise.value) {
        exercise = this.generateExercise()
      }
      this.currentExercise = exercise
    },
    generateExercise () {
      const clef = _.sample(this.options.clef)
      const nextNote = GetRandomNote(clef, false)
      const exercise = { clef, value: nextNote }
      return exercise
    },
    checkAnswer (value) {
      if (value === this.currentExercise.value) {
        this.onCorrectAnswer()
        this.generateNewExercise()
      } else {
        this.onWrongAnswer(value)
      }
    },
    onCorrectAnswer () {
      this.numCorrect += 1
      this.feedback = 'correct'
    },
    onWrongAnswer (wrongValue) {
      this.numWrong += 1
      this.feedback = 'wrong'
      if ('vibrate' in navigator) {
        navigator.vibrate(200)
      }
    }
  },
  mounted () {
    this.startGame()
  }
}
</script>

<style>
.game-screen {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 720px;
}

button.quit {
  padding: 5px;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: lightblue;
  cursor: pointer;
}

button.quit:hover {
  background-color: steelblue;
}

button.quit:focus {
  outline: none;
  background-color: lightblue;
}

button.quit:active {
  background-color: yellow;
}
</style>
