document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.querySelector('.bubbles');

    // Create bubbles
    for (let i = 0; i < 128; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
        bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
        bubblesContainer.appendChild(bubble);
    }

    // Get the footer element
    const footer = document.querySelector('.footer');

    // Function to handle scroll events
    function handleScroll() {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Set a threshold for when to show/hide the footer
        const threshold = 200;

        // Toggle the class based on the scroll position
        if (scrollPosition > threshold) {
            footer.classList.add('footer-hidden');
        } else {
            footer.classList.remove('footer-hidden');
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector('.footer');
    var wrapper = document.querySelector('.wrapper');
  
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
      var windowHeight = window.innerHeight;
      var documentHeight = document.body.offsetHeight;
  
      // Calculate the distance from the bottom of the content to the top of the footer
      var distanceToFooter = documentHeight - (scrollPosition + windowHeight);
  
      // Set a threshold value, adjust as needed
      var threshold = 50;
  
      // Check if the user has scrolled to the bottom of the content
      if (distanceToFooter < threshold) {
        footer.classList.remove('footer-hidden');
      } else {
        footer.classList.add('footer-hidden');
      }
    });
  });
  