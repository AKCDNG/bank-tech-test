class BankApp {
  constructor (date, statement) {
    this.statement = statement
    this.balance = 0
    this.amountInTransaction = 0
    this.todaysDate = date.calculateDate()
  }

  deposit (amount) {
    this.#calculateDeposit(amount, this.todaysDate)
  }

  withdraw (amount) {
    if (this.balance - amount < 0) {
      return (`Your withdrawal exceeds your balance. Please withdraw a maximum of £${this.balance}`)
    }

    this.#calculateWithdrawal(amount, this.todaysDate)
  }

  viewStatement () {
    return this.statement.calculateStatement()
  }

  // private methods to calculate deposit, withdrawal and statement.

  #calculateDeposit (amount) {
    this.balance += amount
    this.amountInTransaction = amount
    this.statement.bankStatement.push(`${this.todaysDate} || ${parseFloat(this.amountInTransaction).toFixed(2)} || || ${parseFloat(this.balance).toFixed(2)}`)
  }

  #calculateWithdrawal (amount) {
    this.balance -= amount
    this.amountInTransaction = amount
    this.statement.bankStatement.push(`${this.todaysDate} || || ${parseFloat(this.amountInTransaction).toFixed(2)} || ${parseFloat(this.balance).toFixed(2)}`)
  }
}

module.exports = BankApp
