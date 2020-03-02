const getAll = jest.fn(async () => {
  return [{}, {}]
})

const get = jest.fn(async id => {
  if (id === 'error') {
    throw new Error()
  }
  return { id }
})

module.exports = {
  get,
  getAll
}
