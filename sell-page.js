document.getElementById('state').addEventListener('change', function() {
    let state = this.value;
    let citySelect = document.getElementById('city');
    citySelect.innerHTML = ''; // Clear previous options

    // Example cities based on the state
    let cities = {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Punjab": ["Amritsar", "Ludhiana", "Chandigarh"],
        "Haryana": ["Gurgaon", "Faridabad", "Karnal"],
        "Delhi": ["Delhi"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"]
    };

    if (cities[state]) {
        let defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.innerText = "Select City";
        citySelect.appendChild(defaultOption);

        cities[state].forEach(function(city) {
            let option = document.createElement('option');
            option.value = city;
            option.innerText = city;
            citySelect.appendChild(option);
        });
    }
});
