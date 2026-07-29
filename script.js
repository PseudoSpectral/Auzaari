// 1. Grab reference to HTML elements using their unique IDs
const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDisplay = document.getElementById('result-display');

// 2. Attach an event listener to run code whenever the button is clicked
calculateBtn.addEventListener('click', function() {
    
    // Parse input strings directly into floating-point numbers
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    // Basic form checking to ensure entries are valid numbers greater than zero
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDisplay.style.display = "block";
        resultDisplay.style.backgroundColor = "#fee2e2"; // Soft red error block
        resultDisplay.style.color = "#991b1b";
        resultDisplay.innerHTML = "Please enter valid, positive values!";
        return; // Break out of function early
    }

    // Convert height from centimeters to meters for the formula
    const heightMeters = heightCm / 100;
    
    // Compute calculation logic: Weight / (Height squared)
    const bmi = weight / (heightMeters * heightMeters);
    
    // Round calculation off to 1 decimal place
    const fixedBmi = bmi.toFixed(1);

    // Determine the user's specific medical category based on score
    let category = "";
    let blockColor = "";
    let textColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
        blockColor = "#fef3c7"; // Warning yellow
        textColor = "#92400e";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight (Healthy) 👍";
        blockColor = "#dcfce7"; // Healthy green
        textColor = "#166534";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        blockColor = "#ffedd5"; // Orange tint
        textColor = "#9a3412";
    } else {
        category = "Obese";
        blockColor = "#fee2e2"; // High alert red
        textColor = "#991b1b";
    }

    // 3. Inject our calculated answers dynamically back into the UI
    resultDisplay.style.display = "block";
    resultDisplay.style.backgroundColor = blockColor;
    resultDisplay.style.color = textColor;
    resultDisplay.innerHTML = `Your BMI is ${fixedBmi} (${category})`;
});