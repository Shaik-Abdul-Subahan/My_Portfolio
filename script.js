function changeText() {
    var button = document.querySelector('.btn');
    button.textContent = 'Hi! Welcome to my portfolio...';
    
    setTimeout(function() {
      button.textContent = 'Say Hello!';
    }, 8000);
  }



  let lastScrollTop = 0;

  window.onload = function() {
    document.querySelector(".scroll-down").style.display = "block"; // Ensure it is visible on page load
  };
  
  window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
  
    if (currentScroll + windowHeight >= documentHeight) {
      document.querySelector(".scroll-down").style.display = "none"; // Hide when at the bottom
    } else {
      document.querySelector(".scroll-down").style.display = "block"; // Show when not at the bottom
    }
  };