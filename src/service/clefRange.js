import _ from 'lodash'

const clefStartMidi = {
  bass: 36,
  treble: 60
}

const getNotesForClef = (clef) => {
  let clefStart = clefStartMidi[clef]
  let clefEnd = clefStart + 23
  return _.range(clefStart, clefEnd)
}

const sharpPositions = [1, 3, 6, 8, 10]

export const isNonSharpNote = (note) => {
  const position = note % 12
  return !_.includes(sharpPositions, position)
}

const getNonSharpNotesForClef = (clef) => {
  return getNotesForClef(clef).filter(isNonSharpNote)
}

const GetRandomNote = (clef, allowSharp) => {
  const noteRange = allowSharp ? getNotesForClef(clef) : getNonSharpNotesForClef(clef)
  return _.sample(noteRange)
}

export default GetRandomNote
