class DateCalculator {
  constructor () {
    this.date = new Date
  }

  calculateDate () {
    const year = this.date.getFullYear()
    const month = String(this.date.getMonth() + 1).padStart(2, '0')
    const day = String(this.date.getDate()).padStart(2, '0')
    const joined = [day, month, year].join('/')
    return joined
  }
}

module.exports = DateCalculator;