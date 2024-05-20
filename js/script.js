const ageForm = document.getElementById('ageForm');
const resultDiv = document.getElementById('result');

ageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    
    const age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        resultDiv.innerHTML = 'Your age is <span class = "age"> ' + (age - 1) + ' years</span>';
    } else {
        resultDiv.innerHTML = 'Your age is <span class = "age"> ' + age + ' years</span>';
    }

    // Reset the date input field
    document.getElementById('dob').value = '';
});
