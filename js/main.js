const form = document.getElementById('contact-form');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Mapping values from your form fields
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
        const res = await fetch('https://formspree.io/f/xbdwrvlq', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({ name, email, message })
        });

        // Now res is properly defined, so we can parse it
        const data = await res.json();

        if (res.ok) {
            alert("Thanks for your message! 😁");
            form.reset();
        } else {
            // Formspree provides specific error messages in the data object
            alert(data.error || "Oops! 😢 There is a problem. Try again shortly👌.");
        }
    } catch (err) {
        alert('Failed to send message. Check console.');
        console.error(err);
    }
});

