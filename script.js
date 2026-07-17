document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = 'Thanks! Your message has been received.';
    form.reset();
  });
});
