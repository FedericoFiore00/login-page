
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

btnsubmitLogIn.addEventListener('click', () => {
    console.log('Log In button clicked');
});

