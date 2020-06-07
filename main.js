const cardNumber = document.querySelector('input#cardnum');
const cardHolder = document.querySelector('input#cardHolder');
const month = document.querySelector('input#month');
const year = document.querySelector('input#year');
const cvv = document.querySelector('input#cvv');
const submit = document.querySelector('input#submit')
const form = document.querySelector('form#form')
const backcard = document.querySelector('.backcard')
const cvvSpan = document.querySelector('.white span')
const userData = {};
const cardInfo = [cardNumber, cardHolder, month, year, cvv];
const card = document.querySelector('.card')

cvv.addEventListener('focus', (e) => {
    card.classList.toggle('rotateF')
    backcard.classList.toggle('rotateB')
})
cvv.addEventListener('blur', (e) => {
    card.classList.toggle('rotateF')
    backcard.classList.toggle('rotateB')
})
cvv.addEventListener('input', (e) => {
    cvvSpan.textContent = cvv.value;
})