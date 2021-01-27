function requestApi(form,cb) {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:3000/auth', true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    
    // xhr.onreadystatechange = function() {
    //     if(this.readyState && this.status) {
    //         const response = this.responseText;
            
    //     }
    // }

    xhr.addEventListener('load', function() {
        const bodyResponse = xhr.responseText;
        const statusCode = this.status;

        cb(bodyResponse, statusCode);
    });
    
    const formData = new FormData(form)
    const convertFormData = new URLSearchParams(formData).toString()
    xhr.send(convertFormData) 
}


