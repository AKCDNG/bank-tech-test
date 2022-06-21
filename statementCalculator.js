class statementCalculator {

  constructor() {
    this.bankStatement = []
  }

  calculateStatement () {
    if(this.bankStatement.includes('date || credit || debit || balance')) {
      this.bankStatement.shift()
      this.bankStatement.reverse().unshift('date || credit || debit || balance')
      return this.bankStatement
    } else {
      this.bankStatement.reverse().unshift('date || credit || debit || balance')
      return this.bankStatement
    }
  }
}

module.exports = statementCalculator;