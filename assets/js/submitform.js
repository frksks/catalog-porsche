function submitForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (firstName && lastName && phone && email) {
        let searchQuery = `${firstName}+${lastName}+${phone}+${email}`;
        document.getElementById('searchQuery').value = searchQuery;
        let form = document.getElementById('contactForm');
        form.submit();
    } else {
        alert("Заполните все поля");
    }
}
