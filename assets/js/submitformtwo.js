function submitForm(event) {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let agree = document.getElementById('agree').checked;
    let date = document.getElementById('date').value;
    let password = document.getElementById('password').value;

    if (firstName && phone) {
        let searchQuery = `?q=${firstName}+${lastName}+${phone}+${email}+${gender}+${agree}+${date}+${password}`;
        let url = document.getElementById('testDriveForm').action + searchQuery;
        window.location.href = url;
    } else {
        alert("Заполните все обязательные поля");
    }
}
