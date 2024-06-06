const isPalindrome = str => {
  return str === str.split('').reverse().join('')
}


function f(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return f(n - 1) + f(n - 2)
}

console.log(f(15))

module.exports = {
  f,
  isPalindrome
}
