/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function add(char) {
  var display = document.getElementById('display');
  display.value = display.value + char;
  return char;
}

function calculate(string){
  let inte = eval(string);
  var display = document.getElementById('display_outcome');
  display.value = inte;
  return inte;
}

function backspace(string){

  return string.substring(0, string.length-1);
}


function add_backspace() {
  var display = document.getElementById('display');
  display.value = display.value.substring(0, display.value.length-1);
  return char;
}


function c() {
  var display = document.getElementById('display');
  display.value = '';
  return char;
}
