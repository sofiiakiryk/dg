const button = document.getElementById("myButton");
const heading = document.getElementById("myHeading");

button.addEventListener("click", function () {
  heading.style.color = "red";
});
function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var sum = num1 + num2 * 2;
  document.getElementById("result").innerHTML = sum;
}
