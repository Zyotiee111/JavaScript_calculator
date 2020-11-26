// Custom JavaScript
const OPERATORS = ["+", "-", "*", "/"];
// display value
function displayValue(val) {
  let initialVal = document.getElementById("result").value;

  if (initialVal == "") {
    if (OPERATORS.indexOf(val) != -1) {
        return;
    }
  }
  document.getElementById("result").value += val;
}
// evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value;
    if (x == "") {
      return;
    }
    let y = eval(x);
    document.getElementById("result").value = y;
  }
  function exp() {
    document.getElementById("result").value=Math.exp(document.getElementById("result").value);}

    function ln() {
        document.getElementById("result").value=Math.log(document.getElementById("result").value);}
  
    function sqrt() {
        document.getElementById("result").value=Math.sqrt(document.getElementById("result").value);}

    function cbrt() {
        document.getElementById("result").value=Math.pow(document.getElementById("result").value,1/3);}

    function square() {
        document.getElementById("result").value=Math.pow(document.getElementById("result").value,2);}

    function cube() {
        document.getElementById("result").value=Math.pow(document.getElementById("result").value,3);}

    function sin() {
        document.getElementById("result").value=Math.sin(document.getElementById("result").value);}

    function cos() {
        document.getElementById("result").value=Math.cos(document.getElementById("result").value);}

    function tan() {
        document.getElementById("result").value=Math.tan(document.getElementById("result").value);}

    // backspace the letter
    function back() {
        var a=   document.getElementById("result").value
        document.getElementById("result").value =a.substr(0,a.length-1)
    }
  
  
//   // clear the result
  function clearResult() {
    document.getElementById("result").value = "";
  }

// Toggle Mode ---------------
// Select the button
const toggleBtn = document.querySelector('.toggle-mode');

// Listen for a click on the button
toggleBtn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  if (this.innerHTML == "Dark Mode") {
    this.innerHTML = "Light Mode";
  } else {
    this.innerHTML = "Dark Mode";
  }
})