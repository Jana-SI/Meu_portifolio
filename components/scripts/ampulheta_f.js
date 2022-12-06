function hourglassF() {

  f.innerHTML = "&#xf252;";

  setTimeout(function () {
    f.innerHTML = "&#xf253;";
  }, 1000);

  setTimeout(function () {
    f.style.transform = 'rotate(90deg)';
  }, 2000);
  setTimeout(function () {
    f.style.transform = 'rotate(180deg)';
  }, 3000);
  setTimeout(function () {
    f.style.transform = 'rotate(360deg)';
  }, 4000);

  setTimeout(function () {
    f.innerHTML = "&#xf251;";
  }, 4000);
}

f = document.getElementById("div6");

if (f !== null) {
  hourglassF();
  setInterval(hourglassF, 5000);
}