const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please provide a valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please provide a valid weight';
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Display the results
        results.innerHTML = `<span>${bmi}</span>`;

        // Display the end message
        if (bmi < 18.6) message.innerHTML = 'You are underweight';
        else if (bmi > 18.6 && bmi < 24.9) message.innerHTML = 'Normal';
        else if (bmi > 24.9) message.innerHTML = 'You are overweight';
    }
});
