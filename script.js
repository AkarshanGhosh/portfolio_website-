let menuLinks = document.getElementById("menu-link");

document.querySelectorAll('ul#menu-link li').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let targetSection = this.innerText.toLowerCase().replace(" ", "-");

        if (targetSection === "home") {
            // If the target section is "Home", scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // For other sections, scroll to the corresponding section
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the menu if open (assuming you have a 'show-menu' class for the open menu)
        menuLinks.classList.remove('show-menu');
    });
});

function toggleMenu() {
    menuLinks.classList.toggle('show-menu');
}

window.onscroll = function () {
    let navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.background = '#eefff9';
    } else {
        navbar.style.background = 'transparent';
    }
};

/*function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (!name || !email) {
      alert('Please enter your name and email.');
      return;
    }
  
    // You need to implement the server-side logic to send the email here
    // This is where you'll use a server-side language like Node.js, PHP, Python, etc.
    // Example (using Fetch API for simplicity):
    fetch('/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
      alert('Email sent successfully!');
      // You can handle the response from the server here
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending email!');
    });
  }
  
  function clearMessage(element) {
    if (element.value === "Type your message here") {
      element.value = "";
    }
  }*/
  
  
