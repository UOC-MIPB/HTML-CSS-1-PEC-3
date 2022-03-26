// Inspired by this solution:
// https://stackoverflow.com/questions/25682379/fade-in-element-by-setting-opacity-with-javascript

function fadeIn() {
  var change = 0.045;
  var opacity = 0;
  var instance = window.setInterval(function () {
    document.getElementById("title").style.opacity = opacity;
    document.getElementById("subtitle").style.opacity = opacity;
    opacity = opacity + change;
    if (opacity > 1) {
      window.clearInterval(instance);
    }
  }, 50);
}
fadeIn();
