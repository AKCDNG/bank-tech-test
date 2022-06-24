const statementPrinter = require('./statementPrinter')

describe('Statement Calculator Testing', () => {
  it('Calculates a statement in the correct format', () => {
    const statement = new statementPrinter
    const bankStatement = []
    bankStatement.push('19/07/2022 || 10.00 || || 10.00')
    bankStatement.push('19/07/2022 || 30.00 || || 40.00')
    bankStatement.push('19/07/2022 || || 10.00 || 30.00')

    expect(statement.calculateStatement(bankStatement)).toEqual(['date || credit || debit || balance', 
    '19/07/2022 || || 10.00 || 30.00', 
    '19/07/2022 || 30.00 || || 40.00', 
    '19/07/2022 || 10.00 || || 10.00'])
  })
})