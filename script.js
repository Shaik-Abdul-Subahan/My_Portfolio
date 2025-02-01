function changeText() {
    var button = document.querySelector('.btn');
    button.textContent = 'Hi! Welcome to my portfolio...';
    
    setTimeout(function() {
      button.textContent = 'Say Hello!';
    }, 8000);
  }