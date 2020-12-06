import AbcNoteForMidiNote from '@/service/abcNotation'

it('validate middle octave',()=> {
  const val = AbcNoteForMidiNote(60)
  expect(val).toBe('C')
})

it('validate 1st upper octave', () => {
  const val = AbcNoteForMidiNote(74)
  expect(val).toBe('d')
})

it('validate 2nd upper octave', () => {
  const val = AbcNoteForMidiNote(86)
  expect(val).toBe("d'")
})

it('validate 1st lower octave', () => {
  const val = AbcNoteForMidiNote(53)
  expect(val).toBe("F,")
})

it('validate 2nd lower octave', () => {
  const val = AbcNoteForMidiNote(41)
  expect(val).toBe("F,,")
})