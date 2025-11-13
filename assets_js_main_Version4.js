// Main JavaScript: small helpers and contact form behavior
document.addEventListener('DOMContentLoaded', function () {
  // Contact form handling: builds a mailto link and provides feedback
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const mailBtn = document.getElementById('mailto-btn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('name') || {value: ''}).value.trim();
      const email = (document.getElementById('email') || {value: ''}).value.trim();
      const message = (document.getElementById('message') || {value: ''}).value.trim();

      if (!name || !email || !message) {
        if (status) status.textContent = 'Please fill in all fields.';
        return;
      }

      // Fallback: open user's mail client with prefilled subject/body
      const to = 'matthewralp.felisarta24@gmail.com';
      const subject = encodeURIComponent('Message from website: ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

      window.location.href = mailto;
      if (status) status.textContent = 'Opening your mail client...';
    });

    if (mailBtn) {
      mailBtn.addEventListener('click', function () {
        const name = (document.getElementById('name') || {value: ''}).value.trim();
        const email = (document.getElementById('email') || {value: ''}).value.trim();
        const message = (document.getElementById('message') || {value: ''}).value.trim();
        const to = 'matthewralp.felisarta24@gmail.com';
        const subject = encodeURIComponent('Message from website: ' + (name || 'No name'));
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = mailto;
      });
    }
  }
});