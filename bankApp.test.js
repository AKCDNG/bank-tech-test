const BankApp = require('./bankApp');
jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-07-19'));

describe('Bank App Testing', () => {
  it('Deposits £100 and show statement with £100 credit and £100 balance on 19/07/2022', () => {
    const bank = new BankApp();

    bank.deposit(100);
    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Shows withdrawal of £40 on 19th July 2022 after deposit of £100', () => {
    const bank = new BankApp();

    bank.deposit(100, '19/07/2022');
    bank.withdraw(40, '19/07/2022');
    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '19/07/2022 || || 40.00 || 60.00', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Tests the given criteria, (original criteria is within README) with reversed list of transactions', () => {
    const bank = new BankApp();

    bank.deposit(1000, '19/07/2022');
    bank.deposit(2000, '19/07/2022');
    bank.withdraw(500, '19/07/2022');

    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance',
    '19/07/2022 || || 500.00 || 2500.00',
    '19/07/2022 || 2000.00 || || 3000.00',
    '19/07/2022 || 1000.00 || || 1000.00'])
  })
})