function oddOrEven(number) {
  return number % 2 === 0 ? 'Even!' : 'Odd!';
}

function evenlyDivisible(dividend, divisor) {
  return dividend % divisor === 0 ? 'Evenly divisible!' :  'Not evenly divisible!';
}

function checkPasswords(password) {
  return password === 'gR3@tsecurity' ? 'Success!' : 'Failure!'
}

function newPasswordsMatch(password, confirmationPassword) {
  return password === confirmationPassword ? `Success!` : `Failure!`
}

function theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball(batterTime, fielderTime) {
  return batterTime <= fielderTime ? `Safe!` : `Out!`
}

function electoralCollege(electoralVotes) {
  return electoralVotes < 270 ? `Blue!` : `Red!`
}

module.exports = {
  oddOrEven,
  evenlyDivisible,
  checkPasswords,
  newPasswordsMatch,
  theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball,
  electoralCollege,
}