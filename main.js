const cardNumber = document.querySelector('input#cardnum');
const cardHolder = document.querySelector('input#cardHolder');
const month = document.querySelector('input#month');
const year = document.querySelector('input#year');
const cvv = document.querySelector('input#cvv');
const submit = document.querySelector('input#submit')
const form = document.querySelector('form#form')
const backcard = document.querySelector('.backcard')
const cvvSpan = document.querySelector('.white span')
const first = document.querySelector('.card .inputhere .first')
const second = document.querySelector('.card .inputhere .second')
const third = document.querySelector('.card .inputhere .third')
const fourth = document.querySelector('.card .inputhere .fourth')
const cardUserName = document.querySelector('.card .carduser p')
const exp = document.querySelector('.card .expire p')
const userData = {};
const cardInfo = [cardNumber, cardHolder, month, year, cvv];
const card = document.querySelector('.card');

year.addEventListener('input', () => {

    exp.textContent = `${month.value}/${year.value}`;
})
//handling Card Num Input
cardNumber.addEventListener('input', () => {
    //split of string to occupy the display on the card
    const num = cardNumber.value;
    firstFour = num.slice(0, 4);
    secondFour = num.slice(4, 8)
    thirdFour = num.slice(8, 12)
    fourthfour = num.slice(12)
    // Assigning each num length to li in css
    first.textContent = firstFour;
    second.textContent = secondFour;
    third.textContent = thirdFour;
    fourth.textContent = fourthfour;
})
//handling Card holder an its update
cardHolder.addEventListener('input', function () {
    let holder = this.value;

    cardUserName.textContent = this.value;

})
// handling cvv field and rotation
const rotate = () => {
    card.classList.toggle('rotateF')
    backcard.classList.toggle('rotateB')
}
cvv.addEventListener('focus', rotate)
cvv.addEventListener('blur', rotate)
//cvv input to text content
cvv.addEventListener('input', (e) => {
    cvvSpan.textContent = cvv.value;
})
submit.addEventListener('click', function (e) {
    e.preventDefault();
    cvv.textContent = " "
    cardNumber.textContent = " "
    cardHolder.textContent = " "
    month.textContent = " "
    year.textContent == " "
})