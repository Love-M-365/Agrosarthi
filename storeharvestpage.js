// Object containing city options for each state/UT
const citiesByState = {
    "Delhi": ["New Delhi"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
    // Add more cities here for each state/UT
};

// Populate cities based on the selected state/UT
function populateCities() {
    const citySelect = document.getElementById("city");
    const stateSelect = document.getElementById("state");
    const selectedState = stateSelect.value;

    // Clear existing city options
    citySelect.innerHTML = '<option value="">Select City</option>';

    // Populate city dropdown with relevant cities
    if (citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Submit button function (extend as needed)
function submitSelection() {
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;

    if (state && city) {
        alert(`You have selected State/UT: ${state} and City: ${city}`);
    } else {
        alert("Please select both a State/UT and a City.");
    }
}
