$(function () {
  $.scrollify({
    section: ".div-scrollify",
    sectionName: false,
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true, // Abilita le barre di scorrimento predefinite
    setHeights: false, // Non impostare automaticamente le altezze delle sezioni
    overflowScroll: true,
    updateHash: false,
    touchScroll: true,
    before: function () {},
    after: function () {},
    afterResize: function () {
      $.scrollify.update(); // Aggiorna Scrollify dopo il ridimensionamento
    },
    afterRender: function () {
      $.scrollify.update(); // Aggiorna Scrollify dopo il rendering
    },
  });
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let tabimgs = document.getElementsByClassName("tab-imgs");

function opentab(tabname) {
  // Converti HTMLCollection in array e usa forEach
  Array.from(tablinks).forEach(function (tablink) {
    tablink.classList.remove("active-link");
  });

  Array.from(tabcontents).forEach(function (tabcontent) {
    tabcontent.classList.remove("active-tab");
  });

  Array.from(tabimgs).forEach(function (tabimg) {
    tabimg.classList.remove("active-img");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  document.getElementById(tabname + "-img").classList.add("active-img");
}

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let translateY = Math.min(
    scrollPosition,
    document.getElementById("header").offsetHeight
  );
  document.getElementById("header").querySelector("img").style.transform =
    "translateY(" + translateY + "px)";
});

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Function to disable Scrollify on mobile devices
function disableScrollifyOnMobile() {
  // Check if the screen width is less than or equal to 1025px (or the size you desire)
  if (window.innerWidth <= 1025) {
    // Disable Scrollify
    $.scrollify.disable();
  } else {
    // Enable Scrollify if the screen width is greater than 1025px
    $.scrollify.enable();
  }
}

// Call the function when the document is ready
$(function () {
  disableScrollifyOnMobile();
});

// Call the function when the window is resized
$(window).on("resize", function () {
  disableScrollifyOnMobile();
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Xv2ukgIG4nYqVenOs");
  const form = document.getElementById("emailjs");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impedisce l'invio del modulo predefinito

    // Invia i dati del modulo a EmailJS
    emailjs.sendForm("service_n7p177b", "template_jov794d", this).then(
      function (response) {
        console.log("Email successfully sent!", response);
        // Aggiungi qui il codice per gestire la visualizzazione di un messaggio di successo all'utente
        successMessage.style.display = "block"; // Mostra il messaggio di successo
        setTimeout(function () {
          successMessage.style.display = "none";
        }, 5000);
        errorMessage.style.display = "none"; // Nasconde il messaggio di errore
      },
      function (error) {
        console.error("Error sending email, Please try again later.", error);
        // Aggiungi qui il codice per gestire la visualizzazione di un messaggio di errore all'utente
        successMessage.style.display = "none"; // Nasconde il messaggio di successo
        errorMessage.style.display = "block"; // Mostra il messaggio di errore
        setTimeout(function () {
          errorMessage.style.display = "none";
        }, 5000);
      }
    );
  });
});
