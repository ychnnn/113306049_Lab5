let rowCount = 0;
let totalMath = 0;
let totalEnglish = 0;

function addRow() {
    const mathInput = document.getElementById('mathInput');
    const englishInput = document.getElementById('englishInput');

    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert('Please enter valid numbers for both Math and English.');
        return;
    }

    rowCount++;
    totalMath += mathScore;
    totalEnglish += englishScore;

    const averageScore = ((mathScore + englishScore) / 2).toFixed(2);

    const tableBody = document.querySelector('#gradesTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${averageScore}</td>
    `;

    tableBody.appendChild(newRow);

    updateAverages();

    // Clear input fields
    mathInput.value = '';
    englishInput.value = '';
}

function updateAverages() {
    const mathAverage = (totalMath / rowCount).toFixed(2);
    const englishAverage = (totalEnglish / rowCount).toFixed(2);
    const overallAverage = ((totalMath + totalEnglish) / (rowCount * 2)).toFixed(2);

    document.getElementById('mathAverage').textContent = mathAverage;
    document.getElementById('englishAverage').textContent = englishAverage;
    document.getElementById('overallAverage').textContent = overallAverage;
}
