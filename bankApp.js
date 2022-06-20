class bankApp {

  constructor() {
    this.statement = ['date || credit || debit || balance'];
    this.balance = 0
    this.amountInTransaction = 0
  }

  deposit(amount) {
    this.balance += amount;
    this.amountInTransaction = amount
    this.statement.push(`${'19/07/2022'} || ${parseFloat(this.amountInTransaction).toFixed(2)} || || ${parseFloat(this.balance).toFixed(2)}`);
  }

  statement() {
    return this.statement;
  }

}

module.exports = bankApp;