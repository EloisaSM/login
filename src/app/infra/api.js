function requestLoginApi(form,cb) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:3000/auth', true)
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

function requestNewUser(form, cb) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:3000/users', true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhr.addEventListener('load', function() {
        const bodyResponse = xhr.responseText;
        const statusCode = this.status;

        console.log(bodyResponse, statusCode)

        cb(bodyResponse, statusCode);
    });

    const formData = new FormData(form)
    const convertFormData = new URLSearchParams(formData).toString()
    xhr.send(convertFormData) 
}


