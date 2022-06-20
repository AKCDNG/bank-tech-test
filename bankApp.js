class BankApp {
  constructor () {
    this.statement = []
    this.balance = 0
    this.amountInTransaction = 0
    this.date = new Date()
    this.todaysDate = this.#calculateDate()
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
    return this.#calculateStatement()
  }

  // private methods to calculate deposit, withdrawal and statement.

  #calculateDeposit (amount) {
    this.balance += amount
    this.amountInTransaction = amount
    this.statement.push(`${this.todaysDate} || ${parseFloat(this.amountInTransaction).toFixed(2)} || || ${parseFloat(this.balance).toFixed(2)}`)
  }

  #calculateWithdrawal (amount) {
    this.balance -= amount
    this.amountInTransaction = amount
    this.statement.push(`${this.todaysDate} || || ${parseFloat(this.amountInTransaction).toFixed(2)} || ${parseFloat(this.balance).toFixed(2)}`)
  }

  #calculateStatement () {
    this.statement.reverse().unshift('date || credit || debit || balance')
    return this.statement
  }

  #calculateDate () {
    const year = this.date.getFullYear()
    const month = String(this.date.getMonth() + 1).padStart(2, '0')
    const day = String(this.date.getDate()).padStart(2, '0')
    const joined = [day, month, year].join('/')
    return joined
  }
}

module.exports = BankApp
