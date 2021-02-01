const BASE_URL = 'http://localhost:3000'

function requestApi(path, form, cb) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', `${BASE_URL}${path}`, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhr.addEventListener('load', function() {
        const bodyResponse = xhr.responseText;
        const statusCode = this.status;

        cb(bodyResponse, statusCode);
    });
    
    const formData = new FormData(form)
    const convertFormData = new URLSearchParams(formData).toString()
    xhr.send(convertFormData) 
}




