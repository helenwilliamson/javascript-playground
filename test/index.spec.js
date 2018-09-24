const fizzbuzz = require('../src/index')

test.each([
  [1, '1'],
  [2, '2'],
  [3, 'Fizz'],
  [4, '4'],
  [5, 'Buzz'],
  [6, 'Fizz'],
  [7, '7'],
  [8, '8'],
  [9, 'Fizz'],
  [10, 'Buzz'],
  [11, '11'],
  [12, 'Fizz'],
  [13, '13'],
  [14, '14'],
  [15, 'FizzBuzz']
])('for %i, prints %p', (number, expected) => {
  expect(fizzbuzz(number)).toBe(expected)
})