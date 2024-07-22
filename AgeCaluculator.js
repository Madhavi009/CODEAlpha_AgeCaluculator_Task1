// script.js
function calculateAge() {
    const date = document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!date || !month || !year) {
        document.getElementById('result').innerText = "Please enter a valid date, month, and year.";
        return;
    }

    const birthDate = new Date(year, month - 1, date);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
