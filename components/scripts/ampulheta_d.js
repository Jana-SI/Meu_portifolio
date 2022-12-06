function hourglassD() {

  d.innerHTML = "&#xf253;";

  setTimeout(function () {
    d.style.transform = 'rotate(90deg)';
  }, 1000);
  setTimeout(function () {
    d.style.transform = 'rotate(180deg)';
  }, 2000);
  setTimeout(function () {
    d.style.transform = 'rotate(360deg)';
  }, 3000);

  setTimeout(function () {
    d.innerHTML = "&#xf251;";
  }, 3000);
  setTimeout(function () {
    d.innerHTML = "&#xf252;";
  }, 4000);
}

d = document.getElementById("div4");

if (d !== null) {
  hourglassD();
  setInterval(hourglassD, 5000);
}