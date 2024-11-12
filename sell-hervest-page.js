"use strict"
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Hide all slides
    slides.forEach((slide) => slide.style.display = "none");
    

    // Show the current slide
    currentIndex = (currentIndex + 1) % slides.length; // Cycle through the slides
    slides[currentIndex].style.display = "block";
    
}

// Move to a specific slide
function currentSlide(n) {
    currentIndex = n - 1;
    showSlides();
}

// Move the slide left or right
function moveSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlides();
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(showSlides, 3000);

// Initial load
showSlides();

function updateTime() {
    const now = new Date();
    console.log(now);

    // Format time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent =` ${hours}:${minutes}:${seconds}`
    // Format date as "Month Day, Year"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);

    // Update greeting based on the time of day
    const greetingText = getGreeting(hours);
    document.getElementById('greeting').textContent = greetingText;
}

function getGreeting(hour) {
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Update time every second
setInterval(updateTime, 1000);
function toggleDescription() {
    var description = document.getElementById("notificationDescription");
    description.style.display = description.style.display === "none" ? "block" : "none";
  }
  function showStage(index) {
    const stages = document.querySelectorAll('.timeline-stage');
    
    // Remove "active" class from all stages
    stages.forEach(stage => stage.classList.remove('active'));

    // Add "active" class to the selected stage
    stages[index].classList.add('active');
  }

  function updateProgress(percentage) {
    const fill = document.getElementById('progress-fill');
    const steps = document.querySelectorAll('.timeline-step');

    // Set progress fill width
    fill.style.width = percentage + '%';

    // Activate steps up to the selected one
    steps.forEach((step, index) => {
      if ((index * 25) <= percentage) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  function toggleExpand(element) {
    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');
}



  // The city for which you want to fetch the weather
  const city = "Delhi";

  // Function to fetch weather data
  async function fetchWeather() {
      try {
          const response = await fetch(`https://wttr.in/${city}?format=%C|%t|%I`);
          const data = await response.text();

          // Extract description, temperature, and icon code from the response
          const [description, temperature, iconUrl] = data.split("|");

          // Update the widget with fetched data
          document.querySelector("#weather h2").textContent = city;
          document.querySelector(".temperature").textContent = temperature;
          document.querySelector(".description").textContent = description;

          // Show the weather icon
         
      } catch (error) {
          console.error("Error fetching weather data:", error);
          document.querySelector("#weather h2").textContent = "Unable to load weather data";
      }
  }

  // Fetch weather data when the page loads
  fetchWeather();
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


const pricesData = {
    wheat: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
    rice: { today: "₹3000", yesterday: "₹2900", lastWeek: "₹2850" },
    corn: { today: "₹1500", yesterday: "₹1480", lastWeek: "₹1450" },
    barley: { today: "₹2200", yesterday: "₹2150", lastWeek: "₹2100" },
    soybean: { today: "₹4200", yesterday: "₹4150", lastWeek: "₹4100" },
    sugarcane: { today: "₹3500", yesterday: "₹3450", lastWeek: "₹3400" },
    cotton: { today: "₹5200", yesterday: "₹5150", lastWeek: "₹5100" },
    potato: { today: "₹1200", yesterday: "₹1150", lastWeek: "₹1100" },
    apple: { today: "₹7000", yesterday: "₹6950", lastWeek: "₹6900" },
    banana: { today: "₹400", yesterday: "₹380", lastWeek: "₹350" },
    orange: { today: "₹1500", yesterday: "₹1450", lastWeek: "₹1400" },
    grapes: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
    mango: { today: "₹5000", yesterday: "₹4950", lastWeek: "₹4900" }
};

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
