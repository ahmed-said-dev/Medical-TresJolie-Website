const scriptURL = 'https://script.google.com/macros/s/AKfycbwFUI1ZHTv46JeYSgao5EfTg4vLpSjHshPPTspFqrgYkEqKpnGp2DycIjrrUW4HEznUcw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then()
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // You can perform any additional processing here (e.g., form validation)

  // Redirect to the thank you page after a short delay (e.g., 2 seconds)
  setTimeout(function() {
      window.location.href = "./thank-you/thank_you.html"; // Replace with your thank you page's URL
  }, 1000); // Adjust the delay as needed
});