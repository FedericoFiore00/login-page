
const box = document.querySelector('.box');    
const btnSignup = document.querySelector('.noAccount .buttonBlack'); 
const btnLogin = document.querySelector('.loginAccount .buttonBlack'); 
const btnsubmitLogIn = document.querySelector('.buttonWhitelog');
const btnsubmitsign = document.querySelector('.buttonWhitesign');

btnSignup.addEventListener('click', () => {
    box.classList.add('is-signup');   
});

btnLogin.addEventListener('click', () => {
    box.classList.remove('is-signup');
});

function startLoading(button) {
    if (!button) return;
    button.classList.add('loading');
}

function stopLoading(button) {
    if (!button) return;
    button.classList.remove('loading');
}

btnsubmitLogIn.addEventListener('click', () => {
    startLoading(btnsubmitLogIn);
    setTimeout(() => stopLoading(btnsubmitLogIn), 1500);
});

btnsubmitsign.addEventListener('click', () => {
    startLoading(btnsubmitsign);
    setTimeout(() => stopLoading(btnsubmitsign), 1500);
});

