const form__register = document.querySelector('.form__register');
const inputs = document.querySelectorAll('input');
const Text = document.querySelector(".text");

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
    
    const {messagem} = await data.json();
    if (messagem !== 'Email enviado com sucesso') {
        Text.style.color = 'red';
        Text.style.fontWeight = 'bold';
        Text.textContent = messagem;
        return;
    }
    Text.style.color = 'green';
    Text.style.fontWeight = 'bold';
    Text.textContent = messagem;
});