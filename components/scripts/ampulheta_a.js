function hourglassA() {

  a.innerHTML = "&#xf251;";

  setTimeout(function () {
    a.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf253;";
  }, 2000);

  setTimeout(function () {
    a.style.transform = 'rotate(90deg)';
  }, 3000);
  setTimeout(function () {
    a.style.transform = 'rotate(180deg)';
  }, 4000);
  setTimeout(function () {
    a.style.transform = 'rotate(360deg)';
  }, 5000);
}

a = document.getElementById("div1");

if (a !== null) {
  hourglassA();
  setInterval(hourglassA, 5000);
}