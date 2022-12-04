   function hourglass() {
  
    d = document.getElementById("div4");

    d.innerHTML = "&#xf253;";

    setTimeout(function(){
      d.style.transform = 'rotate(90deg)';
    },1000);
    setTimeout(function(){
      d.style.transform = 'rotate(180deg)';
    },2000);
    setTimeout(function(){
      d.style.transform = 'rotate(360deg)';
    },3000);

    setTimeout(function () {
        d.innerHTML = "&#xf251;";
      }, 3000);
    setTimeout(function () {
        d.innerHTML = "&#xf252;";
      }, 4000);
  }
  hourglass();
  setInterval(hourglass, 5000); 