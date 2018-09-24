module.exports = fizzbuzz;

function fizzbuzz(number) {
  let result = ''
  if (number % 3 === 0) {
    result = 'Fizz'
  }
  if (number % 5 === 0) {
    result = result + 'Buzz'
  }
  if (result === '') {
    result = String(number)
  }
  return result;
}
