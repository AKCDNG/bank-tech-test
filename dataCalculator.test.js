const DateCalculator = require('./dateCalculator')

jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-07-19'));

describe('Date Calculator Testing', () => {
  it('returns 19/07/2022 when calculateDate() is called', () => {
    const dateCalc = new DateCalculator()

    expect(dateCalc.calculateDate()).toEqual('19/07/2022')
  })
})