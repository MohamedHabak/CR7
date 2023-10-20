const form = document.querySelector('form');

// Add an event listener for the form submit event
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const subject = form.elements.subject.value;
  const message = form.elements.message.value;

  // Log the form data to the console
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  // Clear the form fields
  form.reset();

  // Show a success message
  alert('Your message has been sent!');
});