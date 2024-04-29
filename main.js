var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabimgs = document.getElementsByClassName("tab-imgs");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  for (tabimg of tabimgs) {
    tabimg.classList.remove("active-img");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  document.getElementById(tabname + "-img").classList.add("active-img");
}

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var translateY = Math.min(scrollPosition, document.getElementById('header').offsetHeight);
  document.getElementById('header').querySelector('img').style.transform = 'translateY(' + translateY + 'px)';
});

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Function to disable Scrollify on mobile devices
function disableScrollifyOnMobile() {
  // Check if the screen width is less than or equal to 600px (or the size you desire)
  if (window.innerWidth <= 1025) {
    // Disable Scrollify
    $.scrollify.disable();
  } else {
    // Enable Scrollify if the screen width is greater than 600px
    $.scrollify.enable();
  }
}

// Call the function when the document is ready
$(document).ready(function () {
  disableScrollifyOnMobile();
});

// Call the function when the window is resized
$(window).resize(function () {
  disableScrollifyOnMobile();
});

(function () {
  emailjs.init("Xv2ukgIG4nYqVenOs");
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('emailjs');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce l'invio del modulo predefinito

    // Invia i dati del modulo a EmailJS
    emailjs.sendForm('service_n7p177b', 'template_jov794d', this)
      .then(function (response) {
        console.log('Email successfully sent!', response);
        // Aggiungi qui il codice per gestire la visualizzazione di un messaggio di successo all'utente
        successMessage.style.display = 'block'; // Mostra il messaggio di successo
        setTimeout(function () {
          successMessage.style.display = 'none';
        }, 5000);
        errorMessage.style.display = 'none'; // Nasconde il messaggio di errore
      }, function (error) {
        console.error('Error sending email, Please try again later.', error);
        // Aggiungi qui il codice per gestire la visualizzazione di un messaggio di errore all'utente
        successMessage.style.display = 'none'; // Nasconde il messaggio di successo
        errorMessage.style.display = 'block'; // Mostra il messaggio di errore
        setTimeout(function () {
          errorMessage.style.display = 'none';
        }, 5000);
      });
  });
});
