const form__register = document.querySelector('.form__register');
const inputs = document.querySelectorAll('input');

form__register.addEventListener('submit',async event => {
    event.preventDefault();
    const data = await fetch("/sendEmail",{
        
    });
    console.log(await data.json());
});