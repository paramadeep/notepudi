<template>
<div class="note-panel">
  <div id="note-display" />
  <Suggestion :noteValue=noteValue />
</div>
</template>

<script>
import abcjs from 'abcjs'
import AbcNoteForMidiNote from '../service/abcNotation'
import Suggestion from './Suggestion'

export default {
  name: 'NoteDisplay',
  components: {
    Suggestion
  },
  props: {
    currentExercise: Object
  },
  computed: {
    abc () {
      return (
        'L:1/4\nK:C ' +
        this.currentExercise.clef +
        '\n' +
        AbcNoteForMidiNote(this.currentExercise.value)
      )
    },
    noteValue () {
      return this.currentExercise.value
    }
  },
  watch: {
    abc (value) {
      abcjs.renderAbc('note-display', this.abc, {
        staffwidth: 200,
        scale: 2.5,
        clickListener: () => this.unselect()
      })
    }
  },
  methods: {
    unselect () {
      Array.from(document.getElementsByTagName('path'))
        .filter((p) => p.getAttribute('fill') === '#ff0000')
        .forEach((p) => p.setAttribute('fill', null))
    }
  }
}
</script>

<style scoped>
#note-display {
  min-height: 225px;
  max-height: 225px;
  cursor: pointer;
}
.note-panel {
  display: flex;
  justify-content: space-evenly;
}
</style>
