function requestApi(form) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:3000/auth', true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    
    const formData = new FormData(form)
    const convertFormData = new URLSearchParams(formData).toString()

    xhr.send(convertFormData) 
}


