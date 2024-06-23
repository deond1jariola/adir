// Get the `content` element by its ID or any other suitable method
const contentElement = document.getElementById('content');

// Get the safe area width using the visualViewport API
const safeAreaWidth = window.visualViewport.width - window.innerWidth;

// Calculate the width of the `content` element
const contentWidth = window.innerWidth - safeAreaWidth;

// Apply the calculated width to the `content` element
contentElement.style.width = `${contentWidth}px`;
