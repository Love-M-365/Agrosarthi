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
    document.getElementById('time').textContent =` ${hours}:${minutes}:${seconds};`
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