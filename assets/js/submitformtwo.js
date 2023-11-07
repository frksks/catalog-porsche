const submitTestDriveForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const agree = document.getElementById('agree').checked;
    const date = document.getElementById('date').value;
    const password = document.getElementById('password').value;

    if (name && phone && gender && agree && date && password) {
        const formData = {
            name,
            phone,
            gender,
            agree,
            date,
            password
        };
        console.log(formData);
        alert("Заявка успешно отправлена.");
    } else {
        alert("Заполните все поля");
    }
};