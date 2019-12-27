/* eslint-env mocha */

const assert = require('assert')
const add = require('../src/add')

describe('add()', () => {
  it('should return sum', () => {
    const sum = add(1, 2)
    assert.strictEqual(sum, 3)
  })
})
