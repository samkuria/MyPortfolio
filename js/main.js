

    
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const res = await fetch('https://formspree.io/f/xbdwrvlq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
        headers:{
            'Accept': 'application/json'
        }
      }).then(response =>{
          if(response.ok){
              alert("Thanks for your message😁");
          }
          else{
              alert("Opps!😢There is a problem. Try Again shortly👌");
          }
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

