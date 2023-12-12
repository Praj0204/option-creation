// Define options and their content
const options = [
    { value: "option1", text: "Editable content for Option 1" },
    { value: "option2", text: "Editable content for Option 2" },
    { value: "option3", text: "Editable content for Option 3" },
    { value: "option4", text: "Editable content for Option 4" },
    // Add more options as needed
  ];
  
  // Populate select dropdown with options
  const selectDropdown = document.getElementById('selectOption');
  const contentContainer = document.getElementById('contentContainer');
  const clearButton = document.getElementById('clearButton');
  const addOptionText = document.getElementById('newOptionText');
  const addOptionContainer = document.getElementById('addOptionContainer');
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectDropdown.appendChild(optionElement);
  
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content_' + option.value;
    contentDiv.className = 'content';
    contentDiv.contentEditable = true;
    contentDiv.textContent = option.text;
    contentContainer.appendChild(contentDiv);
  });
  
  // Event listener for select dropdown change
  selectDropdown.addEventListener('change', function() {
    const selectedOption = this.value;
    const contentDivs = document.getElementsByClassName('content');
    
    // Hide all content divs
    for (let i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = 'none';
    }
    
    // Display content based on selected option
    document.getElementById('content_' + selectedOption).style.display = 'block';
  
    // Show the clear button
    clearButton.style.display = 'block';
  });
  
  // Function to clear content
  function clearContent() {
    const selectedOption = selectDropdown.value;
    const contentDiv = document.getElementById('content_' + selectedOption);
    
    // Clear the content of the selected option's div
    contentDiv.textContent = '';
  }
  
  // Function to add a new option
  function addOption() {
    const newOptionText = addOptionText.value.trim();
  
    if (newOptionText !== '') {
      const newOption = document.createElement('option');
      const newOptionValue = 'option' + (options.length + 1);
      newOption.value = newOptionValue;
      newOption.textContent = newOptionText;
      selectDropdown.appendChild(newOption);
  
      const newContentDiv = document.createElement('div');
      newContentDiv.id = 'content_' + newOptionValue;
      newContentDiv.className = 'content';
      newContentDiv.contentEditable = true;
      newContentDiv.textContent = 'Editable content for ' + newOptionText;
      contentContainer.appendChild(newContentDiv);
  
      options.push({ value: newOptionValue, text: newOptionText });
      addOptionText.value = '';
    }
  }



// Function to add an email for the selected option
// Function to add email to the selected option's div
function addEmail() {
    const selectedOption = selectDropdown.value;
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
  
    if (email !== '') {
      // Find the selected option
      const option = options.find(opt => opt.value === selectedOption);
  
      // Create a new div for the email
      const emailDiv = document.createElement('div');
      emailDiv.textContent = `Email: ${email}`;
  
      // Get the content div of the selected option
      const contentDiv = document.getElementById('content_' + selectedOption);
  
      // Append the email div to the content div
      contentDiv.appendChild(emailDiv);
  
      // Clear the email input
      emailInput.value = '';
    }
  }
  
  // Event listener for select dropdown change
  selectDropdown.addEventListener('change', function() {
    const selectedOption = this.value;
    const addEmailContainer = document.getElementById('addEmailContainer');
  
    // Display "Add Email" section
    addEmailContainer.style.display = 'block';
  
    // Hide all content divs
    const contentDivs = document.getElementsByClassName('content');
    for (let i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = 'none';
    }
  
    // Display content based on selected option
    document.getElementById('content_' + selectedOption).style.display = 'block';
  });
  
  // Function to clear content
  function clearContent() {
    const selectedOption = selectDropdown.value;
    const contentDiv = document.getElementById('content_' + selectedOption);
  
    // Clear the content of the selected option's div
    contentDiv.textContent = '';
  }
