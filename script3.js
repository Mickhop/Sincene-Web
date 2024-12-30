// For the Love Page: Do You Love Me?
document.getElementById('yesBtn').addEventListener('click', function() {
    const container = document.getElementById('loveContainer');
    const heartsContainer = document.getElementById('heartsContainer');
    const dontClickText = document.getElementById('dontClickText');
  
    // Change the background color to a love color (red/pink)
    container.classList.add('love-background');
  
    // Generate hearts floating from the bottom to the top
    generateHearts(heartsContainer);
  
    // Change the message text to indicate love
    dontClickText.textContent = "I love you!";
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    const dontClickText = document.getElementById('dontClickText');
    
    // Shake the No button and show a message
    this.classList.add('shake');
    dontClickText.textContent = "I don't let you click it";
    dontClickText.classList.add('changed');
    
    // Reset the shake effect after animation ends
    setTimeout(() => {
      this.classList.remove('shake');
    }, 500);
  });
  
  // Generate floating hearts
  function generateHearts(container) {
    for (let i = 0; i < 80; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      // Set random positions for the hearts
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 2 + 's'; // Randomize animation start time
      container.appendChild(heart);
  
      // Remove heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 5000); // Hearts will disappear after 5 seconds
    }
  }
  