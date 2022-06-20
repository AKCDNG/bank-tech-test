const BankApp = require('./bankApp');

describe('Bank App Testing', () => {
  it('Deposits £100 and show statement with £100 credit and £100 balance on 19/07/2022', () => {
    const bank = new BankApp();

    bank.deposit(100, '19/07/2022');
    expect(bank.statement).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Shows withdrawal of £40 on 24st July 2022 after deposit of £100', () => {
    const bank = new BankApp();

    bank.deposit(100, '19/07/2022');
    bank.withdraw(40, '24/07/2022');
    expect(bank.statement).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00', '24/07/2022 || || 40.00 || 60.00'])
  })
})