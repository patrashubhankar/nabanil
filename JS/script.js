document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code can be added here for interactivity
});

// Enable or Disable Button based on Checkbox
function ActiveDeactiveButton() {
    var isCheck = document.getElementById("exampleCheck1");
    var button = document.getElementById("formSubmit");
    if (isCheck.checked) {
        button.removeAttribute("disabled");
  } else {
      button.setAttribute("disabled","true");
    }
  }
  
  