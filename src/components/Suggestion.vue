<template>
<div>
  <div>{{ displayNote }}</div>
<Keyboard :noteValue=noteValue />
</div>
</template>

<script>

import Keyboard from './Keyboard'
import {DisplayNote} from '../service/abcNotation'
export default {
  name: 'NoteDisplay',
  props: {
    noteValue: null
  },
  components: {
    Keyboard
  },
  computed: {
    displayNote () {
      return DisplayNote(this.noteValue)
    }
  }
}
</script>
