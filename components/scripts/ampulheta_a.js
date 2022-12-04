function hourglassA() {
  
    a = document.getElementById("div1");

    a.innerHTML = "&#xf251;";

    setTimeout(function () {
        a.innerHTML = "&#xf252;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
      }, 2000);

      setTimeout(function(){
        a.style.transform = 'rotate(90deg)';
      },3000);
      setTimeout(function(){
        a.style.transform = 'rotate(180deg)';
      },4000);
      setTimeout(function(){
        a.style.transform = 'rotate(360deg)';
      },5000);
  }
  hourglassA();
  setInterval(hourglassA, 5000);

  /*  function hourglass() {
  
    a = document.getElementById("div1");
    b = document.getElementById("div2");
    c = document.getElementById("div3");
    d = document.getElementById("div4");
    e = document.getElementById("div5");
    f = document.getElementById("div6");

    a.innerHTML = "&#xf251;";
    b.innerHTML = "&#xf252;";
    c.innerHTML = "&#xf253;";
    d.innerHTML = "&#xf252;";
    e.innerHTML = "&#xf251;";
    f.innerHTML = "&#xf252;"; 

    setTimeout(function () {
        a.innerHTML = "&#xf252;"; 
        b.innerHTML = "&#xf253;";
        c.innerHTML = "&#xf252;";
        d.innerHTML = "&#xf251;";
        e.innerHTML = "&#xf252;";
        f.innerHTML = "&#xf253;"; 
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
        
        /* 
        b.innerHTML = "&#xf251;";
        c.innerHTML = "&#xf252;";
        d.innerHTML = "&#xf253;";
        e.innerHTML = "&#xf252;";
        f.innerHTML = "&#xf251;"; 
      }, 2000);

      setTimeout(function(){
        a.style.transform = 'rotate(90deg)';
      },3000);
      setTimeout(function(){
        a.style.transform = 'rotate(180deg)';
      },4000);
      setTimeout(function(){
        a.style.transform = 'rotate(360deg)';
      },5000);
  }
  hourglass();
  setInterval(hourglass, 5000);  */