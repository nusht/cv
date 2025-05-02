document.getElementById('frm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can handle the form submission with fetch or XMLHttpRequest here if needed
     document.getElementById('popup').style.display = 'block';
    // Optionally, submit the form using the fetch API or similar
    //const formData = new FormData(this);
    // fetch(this.action, {
    //  method: this.method,
    //    body: formData
    //  });
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
