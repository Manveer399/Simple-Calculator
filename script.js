class Calculator {
  constructor(previousData, currentData) {
    this.currentData = currentData
    this.previousData = previousData
    this.clear()
  }

  clear() {
    this.currentInput = ''
    this.previousInput = ''
    this.operation = undefined
  }

  delete() {
    this.currentInput = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentInput.includes('.')) return
    this.currentInput += number.toString()
  }

  chooseOperation(operation) {
    if (this.currentInput === '') return
    if (this.previousInput !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousInput = this.currentInput
    this.currentInput = ''
  }

  compute() {
    let computation //result of compute function
    const prev = parseFloat(this.previousInput)
    const current = parseFloat(this.currentInput)

    if (isNaN(prev) || isNaN(current)) return

    switch (this.operation) {
      case '+':
        computation = prev + current
        break

      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.currentInput = computation
    this.operation = undefined
    this.previousInput = ''
  }

  getDisplayNumber() {
    return number
  }

  UpdateDisplay() {
    this.currentData.innerText = this.currentInput

    if (this.operation != null) {
      this.previousData.innerText = `${this.previousInput} ${this.operation}`
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]') //get all the button element with data type numbers
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const previousData = document.querySelector('[data-previous-data]')
const currentData = document.querySelector('[data-current-data]')
const delButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const calculator = new Calculator(previousData, currentData)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.UpdateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.UpdateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.UpdateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.UpdateDisplay()
})

delButton.addEventListener('click', button => {
  calculator.delete()
  calculator.UpdateDisplay()
})

/*
const string = 'mathematics'

console.log(string.slice(1, -2))
*/
