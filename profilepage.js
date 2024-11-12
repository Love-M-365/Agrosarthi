function toggleExpand(element) {
    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');
}
document.getElementById("addFieldForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Field details saved successfully!");
    this.reset();
};




    // Set the HTML for the new field div
    fieldDiv.innerHTML = fieldHTML;

    // Append the new field div to the field container
    document.getElementById('field-container').appendChild(fieldDiv);
  

  function removeField(button) {
    // Remove the field div
    button.parentElement.remove();
  }
  function addField() {
    // Create a new div to contain the input fields
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('input-section');

    // Create individual input fields for field details
    const fieldHTML = `
      <label>Equipment Name:</label>
      <input type="text" class="dynamic-input" placeholder="Enter equipment name">
    
      
        <label>Duration</label>
      <br>
      <label>Date:</label>
      <input type="date" class="dynamic-input" placeholder="Enter Date">
      <label>Number of days equipment is free:</label>
      <input type="number" class="dynamic-input" placeholder="Enter number of days">


      <label>Amount of money you will charge</label>
      <input type="text" class="dynamic-input" placeholder="Enter Amount">
      
      <button class="remove-button" onclick="removeField(this)">Notify Others</button>
    `;

    // Set the HTML for the new field div
    fieldDiv.innerHTML = fieldHTML;

    // Append the new field div to the field container
    document.getElementById('field-container').appendChild(fieldDiv);
  }

  function removeField(button) {
    // Remove the field div
    button.parentElement.remove();
  }
  function addborrow() {
    // Create a new div to contain the input fields
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('input-section');

    // Create individual input fields for field details
    const fieldHTML = `
      <label>Equipment Name:</label>
      <input type="text" class="dynamic-input" placeholder="Enter equipment name">
    
     
      <label>Duration</label>
      <br>
      <label>Date:</label>
      <input type="date" class="dynamic-input" placeholder="Enter Date">
      <label>Number of days:</label>
      <input type="number" class="dynamic-input" placeholder="Enter number of days">



     
      
      <button class="remove-button" onclick="removeField(this)">Send Request</button>
    `;


    // Set the HTML for the new field div
    fieldDiv.innerHTML = fieldHTML;

    // Append the new field div to the field container
    document.getElementById('field-container2').appendChild(fieldDiv);
  }
 function addnot() {
    // Create a new div to contain the input fields
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('input-section');

    // Create individual input fields for field details
    const fieldHTML = `
      <h2>Request Accepted</h2>
      
      <br>
      <h4>Tractor for 3 days</h4><br>
      <label>Farmer Name  :  Lalit Yadav</label><br>
      <label>Farmer's Phone number  :  9898763###</label><br>
      
      <label>Amount to be paid :   500</label><br>
      


     <br>
      
      <button class="remove-button" onclick="removeField(this)">Borrow</button>
    `;
    

    // Set the HTML for the new field div
    fieldDiv.innerHTML = fieldHTML;

    // Append the new field div to the field container
    document.getElementById('field-container2').appendChild(fieldDiv);
  }

  function removeField(button) {
    // Remove the field div
    button.parentElement.remove();
  }
  function addnot2() {
    // Create a new div to contain the input fields
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('input-section');

    // Create individual input fields for field details
    const fieldHTML = `
      <h2>Found borrower</h2>
      
      <br>
      <h4>Cultivator for 5 days</h4><br>
      <label>Farmer Name  :  Rajesh </label><br>
      <label>Farmer's Phone number  :  9777763###</label><br>
      
      
      


     <br>
      
      <button class="remove-button" onclick="removeField(this)">Lend</button>
    `;
    

    // Set the HTML for the new field div
    fieldDiv.innerHTML = fieldHTML;

    // Append the new field div to the field container
    document.getElementById('field-container').appendChild(fieldDiv);
  }

  function removeField(button) {
    // Remove the field div
    button.parentElement.remove();
  }




  var map = L.map('map').setView([28.6139, 77.2090], 14); // Centered on New Delhi

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Define coordinates for the polygon (replace with actual farm coordinates)
  var farmCoordinates = [
    [28.6145, 77.2050],
    [28.6155, 77.2070],
    [28.6135, 77.2095],
    [28.6125, 77.2075]
  ];

  // Create a polygon to highlight the farm area
  var farmArea = L.polygon(farmCoordinates, {
    color: 'green',
    fillColor: '#4CAF50',
    fillOpacity: 0.5,
    weight: 2
  }).addTo(map);

  // Add popup to the polygon
  farmArea.bindPopup("<b>Farm Area</b><br>New Delhi, India");

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
updateTime();