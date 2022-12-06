function hourglassB() {

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
  
  b = document.getElementById("div2");

  if (b !== null) {
    hourglassB();
    setInterval(hourglassB, 5000);
  }