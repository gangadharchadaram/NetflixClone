// Get references to elements
const playButton = document.getElementById('playButton');
const videoPopup = document.getElementById('videoPopup');
const closePopup = document.getElementById('closePopup');
const moviePlayer = document.getElementById('moviePlayer');
const movieDetails = document.getElementById('movieDetails');
const playNowButton = document.getElementById('playNowButton');
const navButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.contentSections');
const movieElements = document.querySelectorAll('.movie');
const moviePopup = document.getElementById('moviePopup');
const movieTitle = document.getElementById('movieTitle');
const movieDescription = document.getElementById('movieDescription');
const moviePopupBg = document.querySelector('.popup-content');
const closeMoviePopup = document.getElementById('closeMoviePopup');
const slideTitle = document.getElementById("slideTitle");
const slideDescription = document.getElementById("slideDescription");
const tvShowsBanner = document.getElementById("tvShowsBanner");


// Array of slides
const slides = [
  {
    title: "YOU",
    description: "The series depicts the crisis and rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage. Watch now!",
    backgroundImage: "images/youBanner.webp",
  },
  {
    title: "Stranger Things",
    description: "A group of kids uncovering mysteries and battling supernatural forces in their small town. Watch the thrilling series now!",
    backgroundImage: "images/tv6.jpg",
  },
  {
    title: "Money Heist",
    description: "The Professor orchestrates an ambitious heist on the Royal Mint of Spain with a group of misfit robbers. Watch the suspense unfold!",
    backgroundImage: "images/money-heist-banner.jpg",
  },
];

// Show the video popup and play the movie
playButton.addEventListener('click', () => {
  videoPopup.classList.remove('hidden');
  moviePlayer.play();
});

// Close the video popup and stop the movie
closePopup.addEventListener('click', () => {
  videoPopup.classList.add('hidden');
  moviePlayer.pause();
  moviePlayer.currentTime = 0; // Reset the video to the beginning
});

// Close popup when clicking outside the content
videoPopup.addEventListener('click', (e) => {
  if (e.target === videoPopup) {
    videoPopup.classList.add('hidden');
    moviePlayer.pause();
    moviePlayer.currentTime = 0;
  }
});

// Add click event to each movie
document.querySelectorAll('.movie').forEach((movieElement) => {
    movieElement.addEventListener('click', () => {
      // Get movie details from data attributes
      const title = movieElement.getAttribute('data-title');
      const description = movieElement.getAttribute('data-description');
      const image = movieElement.getAttribute('data-image');
      const videoSrc = "videos/pushpa.mp4";

      const moviePopupContent = `
      <div class="movie-popup-layout">
        <img src="${image}" alt="${title}" class="popup-image">
        <div class="popup-text">
          <h1>${title}</h1>
          <p>${description}</p>
            <button class="play-now-button" data-video="${videoSrc}">Play Now</button>
        </div>
      </div>
    `;
    const movieDetails = document.querySelector('#movieDetails');
    movieDetails.innerHTML = moviePopupContent;
  
      // Show the popup
      moviePopup.classList.remove('hidden');

      const playNowButton = document.querySelector('.play-now-button');
    playNowButton.addEventListener('click', () => {
      const videoSource = playNowButton.getAttribute('data-video');
      const videoPlayer = document.querySelector('#moviePlayer');
      videoPlayer.src = videoSource;

      // Show the video popup
      videoPopup.classList.remove('hidden');
      moviePopup.classList.add('hidden'); // Hide the details popup
    });
    });
  });
  
  // Close popup
  closeMoviePopup.addEventListener('click', () => {
    moviePopup.classList.add('hidden');
  });
  
  // Play Now Button (Optional Functionality)
  playNowButton.addEventListener('click', () => {
    alert('Play Now button clicked! Implement movie playback here.');
  });

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetSectionId = button.getAttribute('data-target');
  
      // Hide all sections
      contentSections.forEach((section) => {
        section.classList.add('hidden');
      });
  
      // Show the target section
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
  let currentSlideIndex = 0;

  // Function to update the slideshow content
  function updateSlideshow() {
    const slide = slides[currentSlideIndex];
  
    // Update title, description, and background image
    slideTitle.textContent = slide.title;
    slideDescription.textContent = slide.description;
    tvShowsBanner.style.backgroundImage = `url(${slide.backgroundImage})`;
  
    // Move to the next slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  }
  
  // Initialize the slideshow
  setInterval(updateSlideshow, 5000); // Change slide every 5 seconds
  
  // Set the initial slide
  updateSlideshow();