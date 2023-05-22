// This function opens a new window with information about London Bridge.
function openInfoWindow() {
    var window = window.open("https://en.wikipedia.org/wiki/London_Bridge", "London Bridge");
  }
  
  // This function adds an event listener to the "Learn more" button.
  document.getElementById("learn-more-button").addEventListener("click", openInfoWindow);





// JavaScript code to handle interactivity (if needed)
// You can add your own custom JavaScript functionality here
// This is just a basic example

// Example: Alert message when clicking on the bridge image
var bridgeImage = document.querySelector('.bridge-image img');
bridgeImage.addEventListener('click', function() {
  alert('You clicked on the Brooklyn Bridge image!');
});






