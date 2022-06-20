const bankApp = require('./bankApp');

describe('Bank App Testing', () => {
  it('Deposits £100 and show statement with £100 credit and £100 balance on 19/07/2022', () => {
    const bank = new bankApp();

    bank.deposit(100);
    expect(bank.statement()).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00'])
  })
})