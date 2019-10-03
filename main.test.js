const {
  oddOrEven,
  evenlyDivisible,
  checkPasswords,
  newPasswordsMatch,
  theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball,
  electoralCollege,
} = require('./main.js');

describe('oddOrEven', () => {
  it("returns 'Odd!' if the number passed in is odd.", () => {
    expect(oddOrEven(1)).toBe('Odd!')
    expect(oddOrEven(15)).toBe('Odd!')
    expect(oddOrEven(1001)).toBe('Odd!')
  })
  
  it("returns 'Even!' if the number passed in is even.", () => {
    expect(oddOrEven(2)).toBe('Even!')
    expect(oddOrEven(18)).toBe('Even!')
    expect(oddOrEven(10016)).toBe('Even!')
  })
})

describe('evenlyDivisible', () => {
  it("returns 'Evenly divisible!' if the first number passed in is evenly divisible by the second.", () => {
    expect(evenlyDivisible(2, 1)).toBe('Evenly divisible!')
    expect(evenlyDivisible(15, 3)).toBe('Evenly divisible!')
    expect(evenlyDivisible(1000, 100)).toBe('Evenly divisible!')
  })
  
  it("returns 'Not evenly divisible!' if the first number passed in is NOT evenly divisible by the second.", () => {
    expect(evenlyDivisible(3, 2)).toBe('Not evenly divisible!')
    expect(evenlyDivisible(18, 5)).toBe('Not evenly divisible!')
    expect(evenlyDivisible(3, 0)).toBe('Not evenly divisible!')
  })
})

describe('checkPasswords', () => {
  it("returns 'Success!' if the given string is exactly 'gR3@tsecurity'.", () => {
    expect(checkPasswords('gR3@tsecurity')).toBe('Success!')
  })
  
  it("returns 'Failure!' if the given string is anything that's not exactly 'gR3@tsecurity'.", () => {
    expect(checkPasswords('probablybettersecurityhonestly')).toBe('Failure!')
    expect(checkPasswords('gr3@tsecurity')).toBe('Failure!')
    expect(checkPasswords('gr3@tsecurity ')).toBe('Failure!')
  })
})

describe('newPasswordsMatch', () => {
  it(`returns 'Success!' if the two given passwords are identical`, () => {
    expect(newPasswordsMatch(`testpassword`, `testpassword`)).toBe(`Success!`)
  })
  
  it(`returns 'Failure!' if the two given passwords are identical`, () => {
    expect(newPasswordsMatch(`testPasswOrd`, `testPassword`)).toBe(`Failure!`)
    expect(newPasswordsMatch(`testpassword `, `testPassword`)).toBe(`Failure!`)
    expect(newPasswordsMatch(`notRight`, `testPassword`)).toBe(`Failure!`)
  })
})

describe(`theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball`, () => {
  it(`returns 'Safe!' if the batter's time is less than the fielder's time`, () => {
    expect(theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball(23, 24)).toBe('Safe!')
  })

  it(`returns 'Safe!' if the batter's time is equal to the fielder's time`, () => {
    expect(theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball(24, 24)).toBe('Safe!')
  })

  it(`returns 'Out!' if the batter's time is greater than the fielder's time`, () => {
    expect(theBaseballPlayoffsHaveBegunAndItsAGoodThingBecauseColinIsReallyStartingToReachForTernaryExamplesButDoesKnowBaseball(25, 24)).toBe('Out!')
  })
})

describe(`electoralCollege`, () => {
  it(`returns 'Blue!' if the number of electoral college votes is fewer than 270`, () => {
    expect(electoralCollege(269)).toBe('Blue!')
  })
  
  it(`returns 'Red!' if the number of electoral college votes is 270`, () => {
    expect(electoralCollege(270)).toBe('Red!')
  })
  
  it(`returns 'Red!' if the number of electoral college votes is greater than 270`, () => {
    expect(electoralCollege(271)).toBe('Red!')
  })
})