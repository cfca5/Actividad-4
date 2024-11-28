const vacancyForm = document.getElementById('vacancyForm');
const vacancyList = document.getElementById('vacancyList');

vacancyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('vacancyName').value;
    const status = document.getElementById('vacancyStatus').value;
    const li = document.createElement('li');
    li.textContent = `${name} - ${status}`;
    vacancyList.appendChild(li);
    vacancyForm.reset();
});
