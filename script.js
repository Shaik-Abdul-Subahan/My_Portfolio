function changeText() {
    var button = document.querySelector('.btn');
    button.textContent = 'Hi! Welcome to my portfolio...';
    
    setTimeout(function() {
      button.textContent = 'Say Hello!';
    }, 8000);
  }



// Scrolling Button


  let lastScrollTop = 0;

  window.onload = function() {
    document.querySelector(".scroll-down").style.display = "block";
  };
  
  window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // If scrolled down more than 2500px, hide the button
    if (currentScroll > 800) {
      document.querySelector(".scroll-down").style.display = "none";
    } else {
      // If you're scrolling up or you're at the top, show the button again
      if (currentScroll < lastScrollTop) {
        document.querySelector(".scroll-down").style.display = "block";
      }
    }
  
    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll position
  };
  