<template>
  <div class="menu">
    <div class="start-container">
      <button class="start" @click="startGame">{{$t('START')}}</button>
    </div>
    <LastResultDisplay v-if="lastResult" :lastResult="lastResult"/>
    <StatisticsGraph v-if="statistics.lastScores.length >= 2"/>
    <div class="settings">
      <h3>{{$t('settings')}}</h3>
      <div class="setting">
        <SelectOption
          :label="$t('ROUND_LENGTH')"
          :items="gameLengthOptions"
          v-model="options.gameLength"
        />
      </div>
      <div class="setting">
        <SelectOptionMulti :label="$t('CLEF')" :items="clefOptions" v-model="options.clef"/>
      </div>
       <div class="setting">
        <SelectOptionMulti label='HINT' :items="hintOptions" v-model="options.hint"/>
      </div>
      <!-- <div class="setting">
        <SelectOption
          :label="$t('ACCIDENTALS')"
          :items="accidentalOptions"
          v-model="options.accidentals"
        />
      </div>
      <div>
        <SelectOption :label="$t('LANGUAGE')" :items="languageOptions" v-model="options.language"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import SelectOption from './SelectOption'
import SelectOptionMulti from './SelectOptionMulti'
import LastResultDisplay from './LastResultDisplay'
import StatisticsGraph from './StatisticsGraph'

import Options from '../model/Options'
import Statistics from '../model/Statistics'

export default {
  name: 'Menu',
  components: { SelectOption, SelectOptionMulti, LastResultDisplay, StatisticsGraph },
  props: {
    lastResult: Object
  },
  data () {
    return {
      options: Options,
      statistics: Statistics
    }
  },
  computed: {
    gameLengthOptions () {
      return [
        { value: 20, label: this.$t('twentySeconds') },
        { value: 60, label: this.$t('oneMinute') },
        { value: 300, label: this.$t('fiveMinutes') },
        { value: 0, label: this.$t('infinite') }
      ]
    },
    clefOptions () {
      return [
        { value: 'treble', label: this.$t('trebleClef') },
        { value: 'bass', label: this.$t('bassClef') }
        // { value: 'alto', label: this.$t('altoClef') },
        // { value: 'tenor', label: this.$t('tenorClef') }
      ]
    },
    hintOptions () {
      return [
        {value: 'none', label: 'None'},
        {value: 'note', label: 'Note'},
        {value: 'keyboard', label: 'Keyboard'}
      ]
    },
    accidentalOptions () {
      return [
        { value: 'no', label: this.$t('none') },
        { value: 'onlySharp', label: this.$t('sharp') },
        { value: 'onlyFlat', label: this.$t('flat') },
        { value: 'sharpAndFlat', label: this.$t('sharpAndFlat') }
      ]
    }
  },
  watch: {
    'options.language': function (lang) {
      this.$i18n.locale = lang
    }
  },
  methods: {
    startGame () {
      Options.saveOptions()
      this.$emit('startGame')
    }
  },
  created () {
    Options.loadOptions()
    Statistics.loadStatistics()
  }
}
</script>

<style scoped>
.menu {
  max-width: 720px;
  margin: 0 auto;
}

.start-container {
  padding: 15px;
}

button.start {
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: lightblue;
  font-size: 16pt;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
}

button.start:focus {
  outline: none;
  background-color: lightblue;
}

button.start:hover {
  background-color: steelblue;
}

button.start:active {
  background-color: yellow;
}

.setting {
  margin-top: 10px;
}
</style>
