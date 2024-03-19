const logout = document.querySelector('.logout');

// função que recupera o token passado na query 'token'
function TokenUrl () {
    const UrlSearch = new URL(window.location.href);

    const token = UrlSearch.searchParams.get('token');

    return token;
};

TokenUrl();
function Logout(event) {
    
    event.preventDefault();

    const token = TokenUrl();

    const logout = `/jwt/logout?token=${token}`;

    window.location.href = logout;

    localStorage.auth = false;
    localStorage.removeItem('username');
    localStorage.removeItem('token');
}
logout.addEventListener('submit',Logout);
