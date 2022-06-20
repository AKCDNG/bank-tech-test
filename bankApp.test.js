const BankApp = require('./bankApp');

describe('Bank App Testing', () => {
  it('Deposits £100 and show statement with £100 credit and £100 balance on 19/07/2022', () => {
    const bank = new BankApp();

    bank.deposit(100, '19/07/2022');
    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Shows withdrawal of £40 on 24st July 2022 after deposit of £100', () => {
    const bank = new BankApp();

    bank.deposit(100, '19/07/2022');
    bank.withdraw(40, '24/07/2022');
    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '24/07/2022 || || 40.00 || 60.00', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Tests the given criteria, (original criteria is within README) with reversed list of transactions', () => {
    const bank = new BankApp();

    bank.deposit(1000, '10/01/2023');
    bank.deposit(2000, '13/01/2023');
    bank.withdraw(500, '14/01/2023');

    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance',
    '14/01/2023 || || 500.00 || 2500.00',
    '13/01/2023 || 2000.00 || || 3000.00',
    '10/01/2023 || 1000.00 || || 1000.00'])
  })
})