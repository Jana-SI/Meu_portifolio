function hourglassB() {
  
    b = document.getElementById("div2");

    b.innerHTML = "&#xf252;";

    setTimeout(function () {
        b.innerHTML = "&#xf253;";
      }, 1000);
      
      setTimeout(function(){
        b.style.transform = 'rotate(90deg)';
      },2000);
      setTimeout(function(){
        b.style.transform = 'rotate(180deg)';
      },3000);
      setTimeout(function(){
        b.style.transform = 'rotate(360deg)';
      },4000);

    setTimeout(function () {
        b.innerHTML = "&#xf251;";
      }, 4000);
  }
  hourglassB();
  setInterval(hourglassB, 5000);