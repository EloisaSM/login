function sendForm(event, form, path) {
    event.preventDefault()
    requestApi('/auth', form, auth) 
    clearErrorMessage(form)
    reset(form)
}

function reset(form) {
    form.reset()
}

const setErrorMessage = (errorMessage) => {
    const containerMessage = document.querySelector('.messages-container')
    containerMessage.innerText = errorMessage
}

const clearErrorMessage = (form) => {
    form.addEventListener('input', function (){
        const containerMessage = document.querySelector('.messages-container')
        containerMessage.innerText = ''
    })
}

function auth(bodyRequestResponse, statusCode) {
    if(statusCode === 401) {
        setErrorMessage(bodyRequestResponse)
    }

    if(statusCode === 200) {
        alert('Bem vindo!')
    }
}


