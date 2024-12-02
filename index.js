// Image names and URLs
const images = [
  { name: "A group of nude figures intertwine while nibbling on a gargantuan, succulent strawberry", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Strawberry.png" },
  { name: "Duo caresses inside glistening bubble", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Bubble.png" },
  { name: "Others are crushed by colossal, disembodied ears", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Ears.png" },
  { name: "One figure places a spray of pretty flowers into the bum of another", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/flowers.png" },
  { name: "They feast from the mouths of giant birds", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Giantbird.png" },
  { name: "Another resigned to life with sheet music written on his ass", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Sheetmusic.png" },
  { name: "Mermaid seduces sea-monster clad in armor", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Mermaid.png" },
  { name: "And huddle orgiastically inside flower petals and pools", image: "/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/Pools.png"},
  { name: "The avaricious are gobbled up by a bird-bug who excretes them out into an abyss of suffering souls", image:"/Users/katheliaclare/Documents/_CCA/2024-FALL/Web to Print/_Final-SearchBar/Code/Assets/BirdBug.png"},
];

let currentImageIndex = 0; // To keep track of the current image in the lightbox

// Reference to the input and results list
const query = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Function to filter items by the first letter
function searchByFirstLetter(letter) {
  // Clear previous results
  searchResults.innerHTML = '';

  // Filter matching items from the images array
  const filteredImages = images.filter(item => item.name[0].toLowerCase() === letter.toLowerCase());

  if (filteredImages.length === 0) {
      const noResults = document.createElement("li");
      noResults.textContent = "No results found.";
      noResults.style.color = "gray";
      searchResults.appendChild(noResults);
  } else {
      filteredImages.forEach((item, index) => {
          const listItem = document.createElement("li");
          listItem.textContent = item.name;

          // When an image name is clicked, open the lightbox with the full image
          listItem.onclick = () => openLightbox(index);

          searchResults.appendChild(listItem);
      });
  }

  searchResults.style.display = "block"; // Show results dropdown
}

// Event listener for input changes
query.addEventListener('input', (e) => {
  const letter = e.target.value.trim();
  if (letter.length === 1) {
      searchByFirstLetter(letter);
  } else {
      searchResults.style.display = "none"; // Hide if input is invalid
  }
});

// Open the lightbox and display the selected image
function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  lightboxImage.src = images[currentImageIndex].image;
  lightbox.style.display = "flex";
}

// Close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Hide the search results when clicking outside the search container
document.addEventListener("click", function(event) {
  const searchContainer = document.querySelector('.search-container');
  if (!searchContainer.contains(event.target)) {
      searchResults.style.display = "none";
  }
});

// Add reference to the iframe lightbox
const openEmbeddedPage = document.getElementById("openEmbeddedPage");
const lightboxIframe = document.getElementById("lightbox-iframe");

// Open the embedded webpage in the lightbox
openEmbeddedPage.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    // Hide the image lightbox and show the iframe
    lightboxImage.classList.add("hidden");
    lightboxIframe.classList.remove("hidden");
    lightboxIframe.src = "https://example.com"; // Replace with your URL
    lightbox.style.display = "flex";
});

// Ensure the closeLightbox function also clears the iframe source
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxIframe = document.getElementById("lightbox-iframe");

    lightbox.style.display = "none";
    lightboxIframe.src = ""; // Clear iframe source to stop loading
}

// Ensure the openLightbox function works for images
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    // Show the image and hide the iframe
    lightboxIframe.classList.add("hidden");
    lightboxImage.classList.remove("hidden");
    lightboxImage.src = images[currentImageIndex].image;
    lightbox.style.display = "flex";
}