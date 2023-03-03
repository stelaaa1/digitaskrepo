// Send form data to backend server
// Assuming the server sends back a success message
// You can replace the alert with a more sophisticated notification
// And replace the URL with the actual page you want to redirect to
fetch('/submit-form', {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      window.location.href = 'page.html';
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while submitting the form.');
    });
  