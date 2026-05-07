// ==========================================
// 📸 ADD YOUR PHOTOS HERE
// Put your image files in the same folder and 
// type their names inside the quote marks below:
// ==========================================
const myPhotos = [
    "./JS/photo1.jpeg", 
    "./JS/photo2.jpeg", 
    "./JS/photo3.jpg",
    "./JS/photo4.jpeg"
    // Add as many as you want! Just make sure they are in quotes and separated by commas.
    // I've added some temporary placeholder images so you can see how it works right away:
  
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('surpriseBtn');
    const revealSection = document.getElementById('secretReveal');
    const slideImage = document.getElementById('slideshowImage');
    
    let currentPhotoIndex = 0;
    let slideshowInterval;

    button.addEventListener('click', () => {
        // 1. Reveal the hidden message & slideshow
        revealSection.classList.remove('hidden');
        button.style.display = 'none';

        // 2. Start the Slideshow Animation
        startSlideshow();

        // 3. Fire the Confetti!
        triggerConfetti();
    });

    function startSlideshow() {
        // Set the very first image
        slideImage.src = myPhotos[currentPhotoIndex];

        // Change the image every 3.5 seconds
        slideshowInterval = setInterval(() => {
            // Add fade-out CSS class
            slideImage.classList.add('fade-out');

            // Wait for fade out, then swap image and fade back in
            setTimeout(() => {
                currentPhotoIndex = (currentPhotoIndex + 1) % myPhotos.length;
                slideImage.src = myPhotos[currentPhotoIndex];
                slideImage.classList.remove('fade-out');
            }, 800); // 800ms matches the CSS transition time

        }, 3500);
    }

    function triggerConfetti() {
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
            }));
        }, 250);
    }
});