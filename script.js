function changeText() {
    var button = document.querySelector('.btn');
    button.textContent = 'Hi! Welcome to my portfolio...';
    
    setTimeout(function() {
      button.textContent = 'Say Hello!';
    }, 8000);
  }



  let scrollTimeout;

  window.onload = function() {
    document.querySelector(".scroll-down").style.display = "block";
  };
  
  window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let halfWindowWidth = window.innerWidth / 3;
    let scrollEndValue = 800;  // Adjust this value to control when the button disappears
  
    if (currentScroll + windowHeight < documentHeight - scrollEndValue) {
      document.querySelector(".scroll-down").style.display = "none";
      document.querySelector(".scroll-down").style.right = halfWindowWidth + "px";
    } else {
      document.querySelector(".scroll-down").style.display = "none";
    //   document.querySelector(".scroll-down").style.right = "20px";
    }
  
    clearTimeout(scrollTimeout);
  
    scrollTimeout = setTimeout(function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let documentHeight = document.documentElement.scrollHeight;
      let windowHeight = window.innerHeight;
  
      if (currentScroll + windowHeight < documentHeight) {
        document.querySelector(".scroll-down").style.display = "block";
      }
    }, 200);
  };