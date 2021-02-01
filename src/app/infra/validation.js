function sendForm(event, form, path) {
    event.preventDefault()
    requestApi('/auth', form, auth) 
    reset(form)
}

function reset(form) {
    form.reset()
}

const setErrorMessage = (errorMessage) => {
    const containerMessage = document.querySelector('.messages-container')
    containerMessage.innerText = errorMessage
}

function auth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        setErrorMessage(bodyRequestResponse)
    }

    if(statusCode === 200) {
        alert('Sucesso')
    }
}


