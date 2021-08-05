<template>
    <div :style=displayStyle > Keyboard not found, Refresh or Reconnect Keyboad </div>
</template>

<script>
import MIDI from '../service/midi'
export default {
  name: 'RealDeviceInput',
  data () {
    return {
      currentInput: '',
      isKeyBoardAvaialble: false
    }
  },
  computed: {
    displayStyle () {
      return this.isKeyBoardAvaialble ? 'display:none' : 'color:red'
    },
    noteName () {
      return this.currentInput.note.name
    },
    noteValue () {
      return this.currentInput.note.number
    }
  },
  methods: {
    pressed (v) {
      this.currentInput = v
      this.$emit('solved', this.noteValue)
    },
    keyboardAvaialbe () {
      this.isKeyBoardAvaialble = true
    }
  },
  mounted () {
    MIDI.Listen(this.keyboardAvaialbe, this.pressed)
  },
  beforeDestroy () {
    MIDI.Stop()
  }

}
</script>
