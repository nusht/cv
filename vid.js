var video = document.querySelector('my-video');
video.controls; // true
video.controlsList; // "nofullscreen nodownload noremoteplayback noplaybackrate" - "foobar" not present
video.controlsList.remove('noremoteplayback');
video.controlsList; // "nofullscreen nodownload noplaybackrate" - "noremoteplayback" not present
video.getAttribute('controlslist'); //

document.addEventListener('contextmenu', event => event.preventDefault());