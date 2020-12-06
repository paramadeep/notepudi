import GetRandomNotee from '@/service/clefRange'

it('treble clef is between 60 and 83',()=> {
  const val = GetRandomNotee('treble', true)
  expect(val).toBeGreaterThanOrEqual(60)
  expect(val).toBeLessThanOrEqual(83)
})

it('bass clef is between 36 and 59', () => {
  const val = GetRandomNotee('bass', true)
  expect(val).toBeGreaterThanOrEqual(36)
  expect(val).toBeLessThanOrEqual(59)
})

it('treble clef sharp is grater than 60', () => {
  const val = GetRandomNotee('treble', true)
  expect(val).toBeGreaterThanOrEqual(60)
  expect(val).toBeLessThanOrEqual(83)
})

it('bass clef is grater than 60', () => {
  const val = GetRandomNotee('bass', true)
  expect(val).toBeGreaterThanOrEqual(36)
  expect(val).toBeLessThanOrEqual(59)
})
