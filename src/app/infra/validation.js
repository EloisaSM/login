function sendForm(event, form) {
    event.preventDefault()
    requestLoginApi(form, loginAuth) 
    resetForm(form)
}

function sendNewUserForm(event,form) {
    event.preventDefault()
    requestNewUser(form, newUserAuth)
    resetForm(form)
}

const setErrorMessage = (errorMessage) => {
    const containerMessage = document.querySelector('.messages-container')
    containerMessage.innerHTML = errorMessage
    console.log(errorMessage)
}

function loginAuth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        setErrorMessage(bodyRequestResponse)
    }

    if(statusCode === 200) {
        
    }
}

function newUserAuth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        setErrorMessage(bodyRequestResponse)
        
    }

    if(statusCode === 200) {
        alert(bodyRequestResponse)
        hideRegisterContainer()
    }
}

function resetForm(form) {
    form.reset()
}