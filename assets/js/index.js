$(document).ready(function () {
  const navbarHeight = $(".navbar").outerHeight();

  $("nav a").on("click", function (event) {
    event.preventDefault();
    let hash = this.hash;
    const targetOffset = $(hash).offset().top - navbarHeight;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      1500,
      function () {
        window.location.hash = hash;
      }
    );
  });

  $(".hero-actions a").on("click", function (event) {
    if (this.hash) {
      event.preventDefault();
      let hash = this.hash;
      const targetOffset = $(hash).offset().top - navbarHeight;

      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        1500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    $(".error-message").html("");
    $(".form-control").removeClass("is-invalid");

    let isValid = true;

    const nombre = $("#nombre").val().trim();
    if (nombre === "") {
      $("#errorNombre").html("El nombre es obligatorio");
      $("#nombre").addClass("is-invalid");
      isValid = false;
    } else if (nombre.length < 3) {
      $("#errorNombre").html("El nombre debe tener al menos 3 caracteres");
      $("#nombre").addClass("is-invalid");
      isValid = false;
    }

    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      $("#errorEmail").html("El correo electrónico es obligatorio");
      $("#email").addClass("is-invalid");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $("#errorEmail").html("Ingresa un correo electrónico válido");
      $("#email").addClass("is-invalid");
      isValid = false;
    }

    const asunto = $("#asunto").val().trim();
    if (asunto === "") {
      $("#errorAsunto").html("El asunto es obligatorio");
      $("#asunto").addClass("is-invalid");
      isValid = false;
    }

    const mensaje = $("#mensaje").val().trim();
    if (mensaje === "") {
      $("#errorMensaje").html("El mensaje es obligatorio");
      $("#mensaje").addClass("is-invalid");
      isValid = false;
    } else if (mensaje.length < 10) {
      $("#errorMensaje").html("El mensaje debe tener al menos 10 caracteres");
      $("#mensaje").addClass("is-invalid");
      isValid = false;
    }

    if (isValid) {
      $("#mensajeExito").removeClass("d-none").hide().fadeIn(500);
      $("#contactForm")[0].reset();

      setTimeout(function() {
        $("#mensajeExito").fadeOut(500, function() {
          $(this).addClass("d-none");
        });
      }, 5000);
    }
  });
});
