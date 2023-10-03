const nameInput = document.getElementById('name-input');
const cardInput = document.getElementById('card-number-input');
const monthInput = document.getElementById('date-input-month');
const yearInput = document.getElementById('date-input-year');
const cvcInput = document.getElementById('cvc-input');
const confirmBtn = document.getElementById('confirm-button');
const invalidInput = document.getElementById('invalid-input');
const requiredInput = document.getElementById('required-input-one');
const requiredInputTwo = document.getElementById('required-input-two');
const completeState = document.getElementById('complete-state');
const cardInputSection = document.getElementById('card-input-div');
const invalidName = document.getElementById('invalid-name');
const userName = document.getElementById('user-name');
const cardNumberTag = document.getElementById('card-number');
const expiryDate = document.getElementById('exp-date');
const cvcNumberTag = document.getElementById('cvc-number');
const successButton = document.getElementById('success-button');
const cardNumberCheck = /^(\d{4}\s){3}\d{4}$/;


function checkName() {
    let name = nameInput.value;
    const lettersOnly = /^[a-z A-Z\.]*$/.test(name);
    if(lettersOnly === true) {
        userName.innerText = name;
        invalidName.innerText = '';
        return true
    }
    else {
        invalidName.innerText = 'Must contain letters only!';
        invalidName.style.color = 'var(--color-danger)';
        userName.innerText = '';
    }
}

function checkInput() {
    let cardNumber = cardInput.value;

    if(cardNumberCheck.test(cardNumber) === false) {
        invalidInput.innerText = 'Invalid input';
        invalidInput.style.color = 'var(--color-danger)'
    }
    else {
        cardNumberTag.innerText = cardNumber;
        invalidInput.innerText = '';
        return true
    }
}

function checkBlank() {

    let cvcNumber = cvcInput.value || undefined;
    let monthExpiry = monthInput.value || undefined;
    let yearExpiry = yearInput.value || undefined;
    const onlyDigits = /^[^\p{L}]*$/u;

    if(cvcNumber === undefined || monthExpiry === undefined || yearExpiry === undefined) {
        requiredInput.innerText = "Can't be blank";
        requiredInputTwo.innerText = "Can't be blank";
        requiredInput.style.color = 'var(--color-danger)';
        requiredInputTwo.style.color = 'var(--color-danger)';
    }
    else if(onlyDigits.test(monthExpiry) === true && onlyDigits.test(yearExpiry) === true && onlyDigits.test(cvcNumber) === true) {
        if(monthExpiry <= 12) {
            expiryDate.innerText = `${monthExpiry}/${yearExpiry}`;
            cvcNumberTag.innerText = cvcNumber;
            requiredInput.innerText = '';
            requiredInputTwo.innerText = '';
            return true;
        }
        else {
            requiredInput.innerText = 'Wrong Month input';
            requiredInput.style.color = 'var(--color-danger)';
        }
    }
    else {
        requiredInput.innerText = 'Must input numbers only!';
        requiredInputTwo.innerText = 'Must input numbers only!';
        requiredInput.style.color = 'var(--color-danger)';
        requiredInputTwo.style.color = 'var(--color-danger)';
    }
}

function successMessage() {
    if(checkName() === true && checkInput() === true && checkBlank() === true) {
        cardInputSection.style.display = 'none';
        completeState.style.display = 'flex';
    }
}

confirmBtn.onclick = () => {
    checkName();
    checkInput();
    checkBlank();
    successMessage();
}

successButton.onclick = () => {
    cardInputSection.style.display = 'flex';
    completeState.style.display = 'none';

    cardNumberTag.innerText = '0000 0000 0000 0000';
    cvcNumberTag.innerText = '000';
    userName.innerText = 'FELICIA LIERE';  
    expiryDate.innerText = '00/00'; 

    nameInput.value = '';
    cardInput.value = '';
    cvcInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
}