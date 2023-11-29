const billInput = document.querySelector('.bill-input').querySelector('input')
const tipItems = document.querySelector('.tip-items')
const peopleInput = document
  .querySelector('.people-input')
  .querySelector('input')

const resetButton = document
  .getElementById('tip-display')
  .querySelector('button')
const calcContainer = document.getElementById('calculator-container')
const tipButtons = tipItems.querySelectorAll('button')
const tipAmount = document.querySelector('.amount-display')
const totalAmount = document.querySelector('.total-display')

function validateInput() {
  let boolFlag = false

  if (billInput.value == '') {
    document.querySelector('.error-bill').innerText = `Can't be 0`
    boolFlag = false
  } else {
    document.querySelector('.error-bill').innerText = ``
    boolFlag = true
  }

  if (peopleInput.value == '') {
    document.querySelector('.error-people').innerText = `Can't be 0`
    boolFlag = false
  } else {
    document.querySelector('.error-people').innerText = ``
    boolFlag = true
  }

  return boolFlag
}

function calcAmountPerPerson(bill, people, tip) {
  tip = Number(tip.slice(0, tip.length - 1))
  const finalBill = (bill + bill * (tip / 100)) / people
  return finalBill.toFixed(2)
}

function calcTipPerPerson(bill, people, tip) {
  tip = Number(tip.slice(0, tip.length - 1))
  const finalTip = (bill * (tip / 100)) / people

  return finalTip.toFixed(2)
}

function calculateTip(e) {
  const boolFlag = validateInput()

  if (boolFlag) {
    const amountPerPerson = calcAmountPerPerson(
      Number(billInput.value),
      Number(peopleInput.value),
      e.target.innerText
    )

    const tipPerPerson = calcTipPerPerson(
      Number(billInput.value),
      Number(peopleInput.value),
      e.target.innerText
    )

    totalAmount.querySelector('h1').innerText = `$${amountPerPerson}`
    tipAmount.querySelector('h1').innerText = `$${tipPerPerson}`

    billInput.value = ''
    peopleInput.value = ''
  }
}

function resetDisplay() {
  totalAmount.querySelector('h1').innerText = '$0.00'
  tipAmount.querySelector('h1').innerText = '$0.00'
}

tipItems.addEventListener('click', calculateTip)
resetButton.addEventListener('click', resetDisplay)
