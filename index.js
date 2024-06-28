const form = document.querySelector('#form');
const name = document.querySelector('#name');
const adres = document.querySelector('#adres');
const number = document.querySelector('#number');
const email = document.querySelector('#email');
const pasword = document.querySelector('#pasword');
const confpasword = document.querySelector('#confPasword');
const check = document.querySelector('#checkbox');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const user = {
        name: name.value,
        adres: adres.value,
        number: number.value,
        email: email.value,
        pasword: pasword.value,
        confPasword: confPasword.value,
        check: check.checked
    }

    console.log(user);
})

