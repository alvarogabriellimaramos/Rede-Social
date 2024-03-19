const form = document.querySelector("form");
const inputs = document.querySelectorAll('input');
const msg = document.querySelector('.msg');

form.addEventListener('submit',async event => {
    event.preventDefault();
    const data = await fetch("/login",{
        headers: {"Content-Type":"application/json"},
        method: 'POST',
        body: JSON.stringify({
            username: inputs[0].value,
            password: inputs[1].value
        })
    });
    const DataJson = await data.json();
    if (DataJson.messagem !== undefined) {
        msg.textContent = DataJson.messagem;
        return;
    };
    const {token} = DataJson;
    window.location.href = `/home?token=${token}`;

    localStorage.auth = true;
    localStorage.username = inputs[0].value;
    localStorage.token = token;

    msg.textContent = '';
});

async function AuthAuthomatic () {
    const data = await fetch("/user",{
        headers: {"Content-Type":'application/json'},
        method: 'POST',
        body: JSON.stringify({
            username: localStorage.username
        })
    })
    return await data.json();
}

if (localStorage.username === undefined || localStorage.token === undefined) {
    console.log('');
}
else {
    AuthAuthomatic().then(res => {
        const {User} = res;
        if (User.auth && localStorage.auth) {
            window.location.href = `/home?token=${localStorage.token}`
        };
    })
    .catch(e => console.log(e));
}