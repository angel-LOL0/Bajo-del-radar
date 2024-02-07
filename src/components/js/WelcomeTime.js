const saludoElement = document.getElementById("saludo");

function obtenerSaludo() {
  const hora = new Date().getHours();
  let saludo;

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  return saludo;
}

function actualizarSaludo() {
  saludoElement.textContent = obtenerSaludo();
}

setInterval(actualizarSaludo, 1000);

actualizarSaludo();
