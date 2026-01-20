document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  // 1. Verificar si ya existe la preferencia en LocalStorage
  if (!localStorage.getItem("cookies-aceptadas")) {
      banner.style.display = "flex";
  }

  // 2. Evento al hacer clic en el botón
  acceptBtn.addEventListener("click", function() {
      // Guardar la preferencia
      localStorage.setItem("cookies-aceptadas", "true");
      // Ocultar el banner
      banner.style.display = "none";
  });
});