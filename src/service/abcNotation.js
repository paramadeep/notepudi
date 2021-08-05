const baseNotes = ['C', 'C', 'D', 'D', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B']
const abcOctaveProcessor = {
  1: (x) => x + ',,,,',
  2: (x) => x + ',,,',
  3: (x) => x + ',,',
  4: (x) => x + ',',
  5: (x) => x,
  6: (x) => x.toLowerCase(),
  7: (x) => x.toLowerCase() + "'",
  8: (x) => x.toLowerCase() + "''",
  9: (x) => x.toLowerCase() + "'''",
  10: (x) => x.toLowerCase() + "''''"
}

const getBaseNoteWithIndex = (noteValue) => {
  const baseNote = baseNotes[noteValue % 12]
  const octaveIndex = Math.floor(noteValue / 12)
  return { baseNote, octaveIndex }
}

var AbcNoteForMidiNote = (noteValue) => {
  const { baseNote, octaveIndex } = getBaseNoteWithIndex(noteValue)
  return abcOctaveProcessor[octaveIndex](baseNote)
}

export const DisplayNote = (noteValue) => {
  const { baseNote, octaveIndex } = getBaseNoteWithIndex(noteValue)
  return `${baseNote}${octaveIndex}`
}

export default AbcNoteForMidiNote
