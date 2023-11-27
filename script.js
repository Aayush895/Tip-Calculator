const billInput = document.querySelector('.bill-input').querySelector('input')
const tipItems = document.querySelector('.tip-items')
const peopleInput = document
  .querySelector('.people-input')
  .querySelector('input')
const amountDisplay = document.querySelector('.amount-display')
const totalDisplay = document.querySelector('.tip-display')
const resetButton = document
  .getElementById('tip-display')
  .querySelector('button')
const calcContainer = document.getElementById('calculator-container')
const tipButtons = tipItems.querySelectorAll('button')
const customTip = tipItems.querySelector('input')

function validateInput() {
  if (billInput.value == '') {
    document.querySelector('.error-bill').innerText = `Can't be 0`
  } else {
    document.querySelector('.error-bill').innerText = ``
  }

  if (peopleInput.value == '') {
    document.querySelector('.error-people').innerText = `Can't be 0`
  } else {
    document.querySelector('.error-people').innerText = ``
  }
}

function calculateTip(e) {
  validateInput()
  
}

tipItems.addEventListener('click', calculateTip)

// This approach where we are creating a p element for missing input and deleting the p input when the input is missing is not working. Why?
/**
 * const billError = document.createElement('p')
  const peopleError = document.createElement('p')

  if (billInput.value == '') {
    billError.innerText = `Can't be 0`
    billError.setAttribute('class', 'error-bill')
    document.querySelector('.bill-input').appendChild(billError)
    console.log(billError.parentElement);
  } else {
    console.log(billError.parentElement);
    billError.remove()
  }

  if (peopleInput.value == '') {
    peopleError.innerText = `Can't be 0`
    peopleError.setAttribute('class', 'error-people')
    document.querySelector('.people-input').appendChild(peopleError)
  } else {
    parentError.remove
  }
 */