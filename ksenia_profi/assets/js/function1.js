let clickCount = 0;

const node_for_click = document.getElementById("for_click");
function find_edit() {
    const surname = document.getElementsByClassName('block4')[0].innerText;
    const name = document.getElementsByClassName('block5')[0].innerText;
    const birthdate = document.getElementsByClassName('block8')[0].innerText;
    console.log(`${surname} ${name} ${birthdate}`);

    const patronymic = document.getElementById('patronymic').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;

    document.getElementsByClassName('block6')[0].innerText = patronymic;
    document.getElementsByClassName('block9')[0].innerText = city;
    document.getElementsByClassName('block7')[0].innerText = gender;

    clickCount++;
}
node_for_click.addEventListener("click", find_edit);
