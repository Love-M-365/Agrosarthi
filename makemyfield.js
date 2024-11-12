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