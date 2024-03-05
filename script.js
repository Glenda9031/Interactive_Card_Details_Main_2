const cardBackCode = document.querySelector('.card-back-code');
const cardFrontCode = document.querySelector('.card-frront-code');
const cardName = document.querySelector('.card-name');
const expirationDateMonth = document.querySelector('.mm');
const expirationDateYear = document.querySelector('.yy');

const cardBackCodeInput = document.getElementById('cvc');
const cardFrontCodeInput = document.getElementById('card-number');
const cardNameInput = document.getElementById('name');
const expirationDateMonthInput = document.getElementById('mm');
const expirationDateYearInput = document.getElementById('yy');

// Error Handling

const form = document.querySelector('.form');
const nameError = document.querySelector('.name-error');
let nameValid = false;
const numberError = document.querySelector('.num-error');
let numberValid = false;
const mmError = document.querySelector('.mm');
let mmValid = false;
const yyError = document.querySelector('.yy');
let yyValid = false;
const cvcError = document.querySelector('.cvc');
let cvcValid = false;

form.addEventListener('submit', (e) => {
    // Cardholder Name
    if (cardNameInput.value.match("[0-9]+")) {
        cardNameInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        nameError.classList.remove(".display-none");
        nameError.textContent = "Please enter a valid name"
        cardNameInput.addEventListener('focus', () => {
            inputBorderName.classList.add('input-border-display')
        })
        e.preventDefault();
    } else if (cardNameInput.value.length === 0) {
        nameError.classList.remove('display-none');
        nameError.textContent = "Can't be blank";
        cardNameInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
    } else {
        cardNameInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
        nameError.classList.add('display-none')
        nameValid = true;
    }

    // Card Code
    if (cardFrontCodeInput.value.match("[a-zA-Z]+")) {
        cardFrontCodeInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        cardFrontCodeInput.addEventListener('focus', () => {
            inputBorderName.classList.add('input-border-display')
        })
        numberError.classList.remove('display-none')
        numberError.textContent = "Wrong format, numbers only"
        e.preventDefault();
    } else if (cardFrontCodeInput.value.length === 0) {
        nameError.classList.remove('display-none');
        nameError.textContent = "Can't be blank";
        cardFrontCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
        e.preventDefault();
    } else {
        cardFrontCodeInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
        nameError.classList.add('display-none')
        nameValid = true;
    }
    
    // CVC Code
    if (cardBackCodeInput.value.match("[a-zA-Z]+")) {
        cardBackCodeInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        cvcError.classList.remove('display-none')
        cvcError.textContent = "Wrong format, numbers only"
        cardBackCodeInput.addEventListener('focus', () => {
            inputBorderName.classList.add('input-border-display')
        })
        e.preventDefault();
    } else if (cardBackCodeInput.value.length === 0) {
        cvcError.classList.remove('display-none');
        cvcError.textContent = "Can't be blank";
        cardBackCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
        e.preventDefault();
    } else {
        cardBackCodeInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
        cvcError.classList.add('display-none')
        cvcValid = true;
    }

    // Month
    if (expirationDateMonthInput.value.match("[a-zA-Z]+")) {
        expirationDateMonthInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        mmError.classList.remove('display-none')
        mmError.textContent = "Wrong format, numbers only"
        expirationDateMonthInput.addEventListener('focus', () => {
            inputBorderName.classList.add('input-border-display')
        })
        e.preventDefault();
    } else if (expirationDateMonthInput.value.length === 0) {
        mmError.classList.remove('display-none');
        mmError.textContent = "Can't be blank";
        expirationDateMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
        e.preventDefault();
    } else {
        expirationDateMonthInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
        mmError.classList.add('display-none')
        mmValid = true;
    }

    // Year
    if (expirationDateYearInput.value.match("[a-zA-Z]+")) {
        expirationDateYearInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        yyError.classList.remove('display-none')
        yyError.textContent = "Wrong format, numbers only"
        expirationDateYearInput.addEventListener('focus', () => {
            inputBorderName.classList.add('input-border-display')
        })
        e.preventDefault();
    } else if (expirationDateYearInput.value.length === 0) {
        yyError.classList.remove('display-none');
        yyError.textContent = "Can't be blank";
        expirationDateYearInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
        e.preventDefault();
    } else {
        expirationDateYearInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
        yyError.classList.add('display-none')
        yyValid = true;
    }

    // Final Validation
    if (nameValid && numberValid && mmValid && yyValid && cvcValid) {
        expirationDateYearInput.style.cssText("border: 2px solid hsl(0, 100%, 66%)")
        form.classList.add('display-none')
        thankYou.classList.remove('thank-you-display')
        e.preventDefault()
    }
})