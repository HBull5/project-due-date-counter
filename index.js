var interval = setInterval(countDown, 1000);

function countDown() {
  var now = new Date().getTime();
  var pretty = new Date().toLocaleTimeString();
  var end = new Date("june 30, 2021, 11:59:59").getTime();
  var timeLeft = end - now;
  var prettyTime = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  document.getElementById("output").innerHTML = prettyTime;
}
