// Frontend contact form handler
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending...';
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      statusEl.textContent = '✅ Message sent! I will reply soon.';
      form.reset();
    } else {
      const err = await res.json();
      statusEl.textContent = '❌ Error: ' + (err.error || 'Failed to send');
    }
  } catch (err) {
    statusEl.textContent = '❌ Network error — please try later.';
  }
});
