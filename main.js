const cardNumber = document.querySelector('input#cardnum');
const cardHolder = document.querySelector('input#cardHolder');
const month = document.querySelector('input#month');
const year = document.querySelector('input#year');
const cvv = document.querySelector('input#cvv');
const submit = document.querySelector('input#submit')
const form = document.querySelector('form#form')
const userData = {};
const cardInfo = [cardNumber, cardHolder, month, year, cvv];
// for (let inputs of cardInfo) {
//     inputs.addEventListener('change', (e) => {
//         userData[e.target.name] = e.target.value;

//     })

// }
// if (typeof (cardNumber.value) == 'string') {
//     cardNumber.value = " "
// } else {
//     cardNumber.value = cardNumber.value
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
})