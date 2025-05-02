// Disable text selection and copying
document.addEventListener('copy', (e) => {
    e.preventDefault();
});

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable keyboard shortcuts for copying
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

// Disable video download
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.setAttribute('controls', 'false'); // Disable controls 
    video.removeAttribute('src'); // Remove src attribute to prevent download
    video.setAttribute('data-src', video.src); // Store original src
});

// Example function to load video only when needed
function loadVideo(videoElement) {
    const src = videoElement.getAttribute('data-src');
    if (src) {
        videoElement.setAttribute('src', src);
        videoElement.load();
        videoElement.removeAttribute('data-src');
    }
}
