const form__register = document.querySelector('.form__register');
const inputs = document.querySelectorAll('input');

form__register.addEventListener('submit',async event => {
    event.preventDefault();
    const data = await fetch("/sendEmail",{
        headers: {"Content-Type":'application/json'},
        method:'POST',
        body: JSON.stringify({
            username: inputs[0].value,
            email: inputs[1].value,
            password: inputs[2].value,
            confirmPass: inputs[3].value
        })
    });
    console.log(await data.json());
});