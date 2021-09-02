/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  time = time.split(':');
  if (parseInt(10, time[0]) > 17) {
    return "Good Evening";
  } else if ((parseInt(10, time[0]) > 12) && (parseInt(10, time[0]) < 17)) {
  return "Good Afternoon";
  } else if (parseInt(10, time[0]) < 12) {
    return "Good Morning";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerHTML = string;
}