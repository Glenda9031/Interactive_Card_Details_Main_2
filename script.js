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
    
})