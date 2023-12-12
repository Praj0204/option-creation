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
  