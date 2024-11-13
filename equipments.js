function showSoilSensors() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('soil-sensors-page').classList.remove('hidden');
}

function goBack() {
    document.getElementById('soil-sensors-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
}
