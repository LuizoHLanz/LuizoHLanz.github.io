let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("sadGifContainer3").style.display = "none";
  document.getElementById("sadGifContainer4").style.display = "none";
  document.getElementById("sadGifContainer5").style.display = "none";
  document.getElementById("sadGifContainer6").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "GASIAS";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      var imagenCambiar = document.getElementById("perritoTriste");
      if (imagenCambiar && imagenCambiar.style) {
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "En serio";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("siBtn").innerHTML = "Como????"

    

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none"
      document.getElementById("sadGifContainer1").style.display = "block";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("sadGifContainer4").style.display = "none";
      document.getElementById("sadGifContainer5").style.display = "none";

     // Modificar el botón "No"
     document.getElementById("noBtn").innerHTML = "Me lo estas diciendo enserio?";
     document.getElementById("noBtn").style.backgroundColor = "#F1330A";
     document.getElementById("siBtn").innerHTML = "Vengaaaa"

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="voy a llorar eh";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none"
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("sadGifContainer4").style.display = "none";
      document.getElementById("sadGifContainer5").style.display = "none";

    // Modificar el botón "Si"
    document.getElementById("noBtn").style.backgroundColor = "#F1330A";
    document.getElementById("siBtn").innerHTML = "Dale si pofi"


      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Porque?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none"
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "block";
      document.getElementById("sadGifContainer4").style.display = "none";
      document.getElementById("sadGifContainer5").style.display = "none";

     // Modificar el botón "Si"
     document.getElementById("noBtn").style.backgroundColor = "#F1330A";
     document.getElementById("siBtn").innerHTML = "Como????"

      noButtonState++;
      break;

    case 4:
      document.getElementById("noBtn").innerHTML = "Todavía sigues sin quererme?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("sadGifContainer4").style.display = "block";
      document.getElementById("sadGifContainer5").style.display = "none";

    // Modificar el botón "Sí"
    document.getElementById("noBtn").style.backgroundColor = "#F1330A";
    document.getElementById("siBtn").innerHTML = "dale dale dale dale dale"

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "JO";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("sadGifContainer4").style.display = "none";
      document.getElementById("sadGifContainer5").style.display = "block";
      document.getElementById("sadGifContainer6").style.display = "none";

    // Modificar el botón "Sí"
    document.getElementById("noBtn").style.backgroundColor = "#F1330A";
    document.getElementById("siBtn").innerHTML = "Di si por favooor"

      noButtonState++;
      break;

    case 6:
      document.getElementById("noBtn").innerHTML = "por favooooooor";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("sadGifContainer4").style.display = "none";
      document.getElementById("sadGifContainer5").style.display = "none";
      document.getElementById("sadGifContainer6").style.display = "block";

      noButtonState++;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
