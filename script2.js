document.getElementById('submitBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const errorMessage = document.getElementById('error-message');
    
    const images = [
      document.getElementById('firstImage'),
      document.getElementById('secondImage'),
      document.getElementById('thirdImage'),
      document.getElementById('fourthImage'),
      document.getElementById('fifthImage')
    ];
  
    const nextButton = document.getElementById('nextBtn');
    const heartsContainer = document.getElementById('heartsContainer');
  
    if (nameInput.value === "paintdao") {
      // Hide the input box with a fade-out transition
      nameInput.classList.add('fade-out');
  
      // Show each image in sequence with a short delay (0.25s)
      let currentImageIndex = 0;
      let interval = setInterval(() => {
        if (currentImageIndex < images.length) {
          images[currentImageIndex].classList.add('show');
          currentImageIndex++;
        }
        if (currentImageIndex >= images.length) {
          clearInterval(interval); // Stop the interval when all images have been shown
          setTimeout(() => {
            images.forEach(image => image.classList.remove('show')); // Hide all images
            images[images.length - 1].classList.add('show'); // Show the last image forever
            
            // Show the next button and trigger the hearts animation
            nextButton.style.display = 'block';
            generateHearts();
          }, 500); // Wait a moment before showing the last image permanently
        }
      }, 250); // Change image every 0.25s
  
      // Reset the error message
      errorMessage.textContent = '';
    } else {
      // If the name is incorrect, shake the input box and show an error message
      nameInput.classList.add('shake');
      errorMessage.textContent = "Incorrect name! Please try again.";
      
      // Remove the shake effect after the animation ends
      setTimeout(() => {
        nameInput.classList.remove('shake');
      }, 500);
    }
  });
  
  function generateHearts() {
    for (let i = 0; i < 80; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      // Set random positions for the hearts
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 2 + 's'; // Randomize animation start time
      heartsContainer.appendChild(heart);
  
      // Remove heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 5000); // Hearts will disappear after 5 seconds
    }
  }
  