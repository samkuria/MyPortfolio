

    
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        form.reset();
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      alert('Failed to send message. Check console.');
      console.error(err);
    }
  });

