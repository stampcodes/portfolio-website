document.addEventListener("DOMContentLoaded", function () {
  // Inizializza EmailJS
  emailjs.init("Xv2ukgIG4nYqVenOs"); // Usa la tua Public Key di EmailJS

  // Seleziona il form e i messaggi di feedback
  const form = document.getElementById("emailjs");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // Ascolta l'invio del form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Blocca il comportamento predefinito del form

    // Nascondi i messaggi precedenti
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Invia il form tramite EmailJS usando .then() e .catch()
    emailjs.sendForm("service_n7p177b", "template_jov794d", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Mostra il messaggio di successo
        successMessage.style.display = "block";
        setTimeout(function () {
          successMessage.style.display = "none";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);

        // Mostra il messaggio di errore
        errorMessage.style.display = "block";
        setTimeout(function () {
          errorMessage.style.display = "none";
        }, 5000);
      }
    );
  });
});

$(function () {
  $.scrollify({
    section: ".div-scrollify",
    sectionName: false,
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    setHeights: false,
    overflowScroll: true,
    updateHash: false,
    touchScroll: true,
    before: function () {},
    after: function () {},
    afterResize: function () {
      $.scrollify.update();
    },
    afterRender: function () {
      $.scrollify.update();
    },
  });

  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");
  let tabimgs = document.getElementsByClassName("tab-imgs");

  // Rendi la funzione opentab una proprietà dell'oggetto window
  window.opentab = function (tabname) {
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
  };

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
  window.openmenu = function () {
    sidemenu.style.right = "0";
  };
  window.closemenu = function () {
    sidemenu.style.right = "-200px";
  };

  function disableScrollifyOnMobile() {
    if (window.innerWidth <= 1025) {
      $.scrollify.disable();
    } else {
      $.scrollify.enable();
    }
  }

  disableScrollifyOnMobile();

  $(window).on("resize", function () {
    disableScrollifyOnMobile();
  });
});
