<template>
<div>
  <h1 v-if="showNote">{{ displayNote }}</h1>
<Keyboard v-if="showKeyboard" :noteValue=noteValue />
</div>
</template>

<script>

import Keyboard from './Keyboard'
import {DisplayNote} from '../service/abcNotation'
export default {
  name: 'NoteDisplay',
  props: {
    noteValue: Number,
    hints: Array
  },
  components: {
    Keyboard
  },
  computed: {
    displayNote () {
      return DisplayNote(this.noteValue)
    },
    showNote () {
      return this.hints.includes('note')
    },
    showKeyboard () {
      return this.hints.includes('keyboard')
    }
  }
}
</script>
