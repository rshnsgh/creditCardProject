document.getElementById('credNumber').addEventListener('input', formatCreditCardNumber);

function formatCreditCardNumber(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
    value = value.replace(/(.{4})/g, '$1 '); // Add space every 4 digits
    input.value = value.trim(); // Remove any trailing space
}

function completed() {
    document.querySelector('.right-section')
     .innerHTML = `
     <div class="ccontainer">
        <img src="images/icon-complete.svg" alt="" srcset="">
        <h1 class="thanks">THANK YOU!</h1>
        <p class="note">We've added your card details</p>
        <button class="continue">Continue</button>
     </div>
     `;
}

function submitForm() {
    const creditName = document.getElementById('js-cred-name-input').value;
    const creditNumber = document.getElementById('credNumber').value.replace(/\s/g, ''); // Remove spaces for the card number
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const creditCvc = document.getElementById('cvcNo').value;

    document.getElementById('js-cred-name').textContent = creditName || 'Jane Appleseed';
    document.querySelector('.js-cred-no').textContent = formatDisplayCreditCardNumber(creditNumber) || '0000 0000 0000 0000';
    document.querySelector('.js-cred-exp').textContent = (expMonth && expYear) ? `${expMonth}/${expYear}` : '00/00';
    document.querySelector('.cvc').textContent = creditCvc || '000';


    completed();
}

function formatDisplayCreditCardNumber(number) {
    return number.replace(/(.{4})/g, '$1 ').trim();
}
