// Function to append numbers and operators to the display
function appendToDisplay(value) {
   document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
   document.getElementById('display').value = '';
}

// Function to calculate the result of the expression
function calculateResult() {
   const display = document.getElementById('display');
   try {
       // Use the Function constructor to safely evaluate the string expression
       display.value = eval(display.value);
   } catch (error) {
       display.value = 'Error';
   }
}
