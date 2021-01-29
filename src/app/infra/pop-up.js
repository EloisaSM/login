const registerContainer = document.querySelector('.register-container');
const loginContainer = document.querySelector('.login-container');

function showRegisterContainer() {
    registerContainer.classList.add('show');
    loginContainer.classList.add('hide');
}

function hideRegisterContainer(){
    registerContainer.classList.remove('show');
    loginContainer.classList.add('show');
}