class BankApp {
  constructor () {
    this.statement = []
    this.balance = 0
    this.amountInTransaction = 0
  }

  deposit (amount, date) {
    this.#calculateDeposit(amount, date)
  }

  withdraw (amount, date) {
    this.#calculateWithdrawal(amount, date)
  }

  viewStatement () {
    return this.#calculateStatement()
  }

  //private methods to calculate deposit, withdrawal and statement.

  #calculateDeposit(amount, date) {
    this.balance += amount
    this.amountInTransaction = amount
    this.statement.push(`${date} || ${parseFloat(this.amountInTransaction).toFixed(2)} || || ${parseFloat(this.balance).toFixed(2)}`)
  }

  #calculateWithdrawal(amount, date) {
    this.balance -= amount
    this.amountInTransaction = amount
    this.statement.push(`${date} || || ${parseFloat(this.amountInTransaction).toFixed(2)} || ${parseFloat(this.balance).toFixed(2)}`)
  }

  #calculateStatement() {
    this.statement.reverse().unshift('date || credit || debit || balance');
    return this.statement
  }
}

module.exports = BankApp
