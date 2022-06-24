class statementPrinter {

  calculateStatement (statement) {
    if(statement.includes('date || credit || debit || balance')) {
      statement.shift()
      statement.reverse().unshift('date || credit || debit || balance')
      return statement
    } else {
      statement.reverse().unshift('date || credit || debit || balance')
      return statement
    }
  }
}

module.exports = statementPrinter;