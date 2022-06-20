class BankApp {

  constructor() {
    this.statement = ['date || credit || debit || balance'];
    this.balance = 0
    this.amountInTransaction = 0
  }

  deposit(amount, date) {
    this.balance += amount;
    this.amountInTransaction = amount
    this.statement.push(`${date} || ${parseFloat(this.amountInTransaction).toFixed(2)} || || ${parseFloat(this.balance).toFixed(2)}`);
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.amountInTransaction = amount
    this.statement.push(`${date} || || ${parseFloat(this.amountInTransaction).toFixed(2)} || ${parseFloat(this.balance).toFixed(2)}`);
  }

  statement() {
    const statementTotal = this.statement.forEach(statementLine => {console.log(statementLine)})
    return statementTotal;
  }

}

module.exports = BankApp;