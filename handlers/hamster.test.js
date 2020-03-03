const Boom = require('@hapi/boom')

const hamster = require('./hamster')
const hamsters = require('../lib/data/hamsters')

jest.unmock('./hamster')

test('should fail so we can test out codepipeline', () => {
  expect(1).toBe(2)
})

test('gets a hamster with the id parameter', async () => {
  const testId = 'testid'
  const testRequest = {
    params: {
      id: testId
    }
  }
  const selectedHamster = await hamster(testRequest)

  expect(selectedHamster).toBeTruthy()
  expect(hamsters.get).toHaveBeenCalledWith(testId)
})

test('throws an error if not found', async () => {
  const testRequest = {
    params: {
      id: 'error'
    }
  }

  expect(hamster(testRequest)).rejects.toBe(Boom.notFound(new Error()))
})