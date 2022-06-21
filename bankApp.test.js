const { it } = require('@jest/globals');
const BankApp = require('./bankApp');
const DateCalculator = require('./dateCalculator')
const statementCalculator = require('./statementCalculator')
jest.mock('./dateCalculator.js')
jest.mock('./statementCalculator')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  DateCalculator.mockClear()
  statementCalculator.mockClear()
});

jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-07-19'));

describe('Bank App Testing', () => {
  it('Deposits £100 and show statement with £100 credit and £100 balance on 19/07/2022', () => {
    const dateCalc = new DateCalculator()
    const statementCalc = new statementCalculator()
    dateCalc.calculateDate.mockImplementation(() => {return '19/07/2022'})
    statementCalc.bankStatement = []
    statementCalc.calculateStatement.mockImplementation(() => {return ['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00']})

    const bank = new BankApp(dateCalc, statementCalc);

    bank.deposit(100);

    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Shows withdrawal of £40 on 19th July 2022 after deposit of £100', () => {
    const dateCalc = new DateCalculator()
    const statementCalc = new statementCalculator()
    dateCalc.calculateDate.mockImplementation(() => {return '19/07/2022'})
    statementCalc.bankStatement = []
    statementCalc.calculateStatement.mockImplementation(() => {return ['date || credit || debit || balance', '19/07/2022 || || 40.00 || 60.00', '19/07/2022 || 100.00 || || 100.00']})

    const bank = new BankApp(dateCalc, statementCalc);

    bank.deposit(100);
    bank.withdraw(40);
    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance', '19/07/2022 || || 40.00 || 60.00', '19/07/2022 || 100.00 || || 100.00'])
  })

  it('Tests the given criteria, (original criteria is within README) with reversed list of transactions', () => {
    const dateCalc = new DateCalculator()
    const statementCalc = new statementCalculator()
    dateCalc.calculateDate.mockImplementation(() => {return '19/07/2022'})
    statementCalc.bankStatement = []
    statementCalc.calculateStatement.mockImplementation(() => {return ['date || credit || debit || balance',
    '19/07/2022 || || 500.00 || 2500.00',
    '19/07/2022 || 2000.00 || || 3000.00',
    '19/07/2022 || 1000.00 || || 1000.00']})

    const bank = new BankApp(dateCalc, statementCalc);

    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);

    expect(bank.viewStatement()).toEqual(['date || credit || debit || balance',
    '19/07/2022 || || 500.00 || 2500.00',
    '19/07/2022 || 2000.00 || || 3000.00',
    '19/07/2022 || 1000.00 || || 1000.00'])
  })

  it('Returns string to user if withdrawal amount is too high', () => {
    const dateCalc = new DateCalculator()
    const statementCalc = new statementCalculator()
    dateCalc.calculateDate.mockImplementation(() => {return '19/07/2022'})
    statementCalc.bankStatement = []
    statementCalc.calculateStatement.mockImplementation(() => {return 'Your withdrawal exceeds your balance. Please withdraw a maximum of £0'})

    const bank = new BankApp(dateCalc, statementCalc);

    expect(bank.withdraw(100)).toEqual('Your withdrawal exceeds your balance. Please withdraw a maximum of £0')
  })
})