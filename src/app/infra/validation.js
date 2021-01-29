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

function loginAuth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        alert(bodyRequestResponse)
    }

    if(statusCode === 200) {
        alert(bodyRequestResponse)
    }
}

function newUserAuth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        alert(bodyRequestResponse)
        
    }

    if(statusCode === 200) {
        alert(bodyRequestResponse)
        hideRegisterContainer()
    }
}

function resetForm(form) {
    form.reset()
}