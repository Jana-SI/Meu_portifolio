function hourglassA() {
  
    e = document.getElementById("div5");

    e.innerHTML = "&#xf251;";

    setTimeout(function () {
        e.innerHTML = "&#xf252;";
      }, 1000);
    setTimeout(function () {
        e.innerHTML = "&#xf253;";
      }, 2000);

      setTimeout(function(){
        e.style.transform = 'rotate(90deg)';
      },3000);
      setTimeout(function(){
        e.style.transform = 'rotate(180deg)';
      },4000);
      setTimeout(function(){
        e.style.transform = 'rotate(360deg)';
      },5000);
  }
  hourglassA();
  setInterval(hourglassA, 5000);