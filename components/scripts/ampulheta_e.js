function hourglassE() {

  e.innerHTML = "&#xf251;";

  setTimeout(function () {
    e.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    e.innerHTML = "&#xf253;";
  }, 2000);

  setTimeout(function () {
    e.style.transform = 'rotate(90deg)';
  }, 3000);
  setTimeout(function () {
    e.style.transform = 'rotate(180deg)';
  }, 4000);
  setTimeout(function () {
    e.style.transform = 'rotate(360deg)';
  }, 5000);
}

e = document.getElementById("div5");

if (e !== null) {
  hourglassE();
  setInterval(hourglassE, 5000);
}