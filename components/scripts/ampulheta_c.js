   function hourglass() {
  
    c = document.getElementById("div3");

    c.innerHTML = "&#xf253;";

    setTimeout(function(){
      c.style.transform = 'rotate(90deg)';
    },1000);
    setTimeout(function(){
      c.style.transform = 'rotate(180deg)';
    },2000);
    setTimeout(function(){
      c.style.transform = 'rotate(360deg)';
    },3000);

    setTimeout(function () {
        c.innerHTML = "&#xf251;";
      }, 3000);
    setTimeout(function () {
        c.innerHTML = "&#xf252;";
      }, 4000);
  }
  hourglass();
  setInterval(hourglass, 5000);