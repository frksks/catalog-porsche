function submitForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (firstName && lastName && phone && email) {
        let formData = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        console.log(formData);
        alert("Заявка успешно отправлена.");
    } else {
        alert("Заполните все поля");
    }
}