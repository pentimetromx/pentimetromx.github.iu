 const botonesMama = document.getElementById('botones-pinedas')
 const botonesDuarte = document.getElementById('botones-duarte')
 const botonesLondoño = document.getElementById('botones-londoño')
 const botonesToro = document.getElementById('botones-toro')
 const botonesMuñoz = document.getElementById('botones-muñoz')
 const botonesMira = document.getElementById('botones-mira')
 const botonesGarcia = document.getElementById('botones-garcia') 

 const descripciones = document.getElementById('descripciones')
 const descripcion = document.getElementsByClassName('descripcion')
 const descripcionOlga = document.getElementById('descripcion-olga') 
 
 const videosContenedor = document.getElementById('video-v')

 const imagenes = document.querySelectorAll('imagenes-i')


function vuelveaInicio() {
  // Obtener todos los elementos de audio en la página
  var audios = document.getElementsByTagName('audio');

  // Recorrer todos los elementos de audio y detener su reproducción
  for (var i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }

  var elementsToHide = document.querySelectorAll('.video-v, .botones, .imagenes-i, .descripcion');   
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
 
  var elementsToShow = document.querySelectorAll(".image, .button, .etiqueta, .container-Ini");  
  for (var i = 0; i < elementsToShow.length; i++) {
    elementsToShow[i].style.display = "flex";
  } 

    enlargeImages()    
    setTimeout(startImageTransition, 600);           
}

const olgaDescripcion = createDescripcionElement('olga', './assets/mama.jpg', 'hideBotDescrip()');
const tinaDescripcion = createDescripcionElement('tina', './assets/tina.jpg', 'hideBotDescrip()');
const silviDescripcion = createDescripcionElement('silvi', './assets/Silvi.png', 'hideBotDescrip()');
const nenaDescripcion = createDescripcionElement('nena', './assets/nenan.jpeg', 'hideBotDescrip()');

function createDescripcionElement(id, imagenSrc, hideFunction) {
  return `
    <div id="descripcion-${id}" class="descripcion">
      <img src="${imagenSrc}" class="imagenDecripcion" alt="Image" id="imagen-${id}" onclick="${hideFunction}">

      <div id="descripcion" class="descripciones">
        <!-- Contenido específico de cada descripción -->
      </div>
      <div id="boton-${id}" class="boton-"> 
        <button class="btnI" onclick="hideDescripVideos('video-${id}')">Videos de ${id}</button> 
        <button class="btnI" onclick="hideDescripFotos('imagenes-${id}')">Fotos de ${id}</button>   
        <button type="button" id="mi-boton" class="btnI" onclick="vuelveaInicio()">Volver a inicio</button>     
      </div> <br>
      <audio id="${id}" src="./assets/${id}.mp3"></audio>  
    </div>
  `;
}

function hideBotDescrip(elementId, buttonId) {

  var img = document.getElementById(buttonId);
  img.classList.add('pixelate');

  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones');
    for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
    }

    var botDescrip = document.getElementById(elementId);
    botDescrip.style.display = 'flex';  

    var sonido = document.getElementById(elementId);
    var audio = sonido.querySelector("audio");   
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();
  }, 500);  
}

function hideDescripVideos(elementId) {       // DESCRIPCION / VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
    elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById(elementId);
  videoOlga.style.display = 'flex';
}
function hideDescripFotos(elementId) {        // DESCRIPCION / FOTOS     
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
    elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById(elementId);
  videoOlga.style.display = 'flex';
}
function hideVidImagen(elementId) {           // VIDEOS / FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
    elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var contImagen = document.getElementById(elementId);
  contImagen.style.display = 'flex';

} 
function hideImagVideo(elementId) {           // FOTOS / VIDEOS  
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');  
  for (var i = 0; i < elementsToHide.length; i++) { 
    elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var contiVideo = document.getElementById(elementId);
  contiVideo.style.display = 'flex';
} 
function hideDescDesc(elementId) {            // DESCRIPCION / DESCRIPCION
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById(elementId);
  videoOlga.style.display = 'flex';
}
function hideInicBotonera(elmentID) {       // INICIALES / BOTONERA
  var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }
  // Hacer visible el contenedor
  var contenedor = document.getElementById(elmentID);
  contenedor.style.display = 'flex';
  // Obtener todas las imágenes dentro del contenedor
  var imagenes = contenedor.getElementsByTagName("img");
  // Aplicar los estilos de animación a cada imagen
  for (var i = 0; i < imagenes.length; i++) {
    var imagen = imagenes[i];
    imagen.style.animation = "zoomEffect1 1s";
    // Aplicar diferentes duraciones de animación
    if (i == 1) {
      imagen.style.animation = "zoomEffect1 0.8s";
    } else if (i == 2) {
      imagen.style.animation = "zoomEffect1 0.6s";
    } else if (i == 3) {
      imagen.style.animation = "zoomEffect1 0.4s";
    }
  }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<TRANSICIONES AL INICIO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function enlargeImages() {
  // Seleccionar todos los elementos con la clase 'descripcion' y almacenarlos en la variable 'elementsToHide'
  var elementsToHide = document.querySelectorAll('.descripcion');
  // Recorrer cada elemento en 'elementsToHide' y ocultarlos estableciendo su propiedad de visualización en 'none'
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }

  // Obtener todos los elementos con la clase 'image' y almacenarlos en la variable 'images'
  var images = document.getElementsByClassName('image');
  // Inicializar la variable de índice actual en 0
  var currentIndex = 0;

  // Definir una función para ampliar la siguiente imagen
  function enlargeNextImage() {
    // Verificar si currentIndex es menor o igual al número de imágenes
    if (currentIndex <= images.length) {
      // Si currentIndex es mayor que 0, eliminar la clase 'enlarged' de la imagen anterior
      if (currentIndex > 0) {
        images[currentIndex - 1].classList.remove('enlarged');
      }
      // Agregar la clase 'enlarged' a la imagen actual
      images[currentIndex].classList.add('enlarged');
      // Incrementar currentIndex
      currentIndex++;
      // Llamar a la función 'enlargeNextImage' después de un retraso de 197 milisegundos
      setTimeout(enlargeNextImage, 197);
    }
  }

  // Obtener todos los elementos con la clase 'button' y almacenarlos en la variable 'buttons'
  var buttons = document.getElementsByClassName('button');
  // Obtener el elemento con la clase 'container-Ini' y almacenarlo en la variable 'container'
  var container = document.querySelector('.container-Ini');
  // Inicializar la variable de índice de botón en 0
  var buttonIndex = 0;

  // Definir una función para aplicar efectos a los botones
  function applyButtonEffects() {
    // Verificar si buttonIndex es menor que el número de botones
    if (buttonIndex < buttons.length) {
      // Llamar a la función 'toggleButton' con un retraso de buttonIndex * 200 milisegundos, pasando el botón actual como argumento
      setTimeout(function(button) {
        toggleButton(button);
      }, buttonIndex * 200, buttons[buttonIndex]);
      // Incrementar buttonIndex
      buttonIndex++;
      // Llamar a la función 'applyButtonEffects' después de un retraso de 200 milisegundos
      setTimeout(applyButtonEffects, 200);
    }
  }
  // Llamar a la función 'applyButtonEffects' para comenzar a aplicar los efectos a los botones
  applyButtonEffects();
  // Llamar a la función 'parpadeo' para hacer que los botones parpadeen
  parpadeo();
  // Llamar a la función 'enlargeNextImage' para comenzar a ampliar las imágenes
  enlargeNextImage();
}
function parpadeo() {
  var buttons = document.getElementsByClassName('button');
  for (var i = 0; i < buttons.length; i++) {
    setTimeout(function(button) {
      toggleButton(button);
    }, i * 200, buttons[i]);
  }
}
function toggleButton(button) {
  button.classList.toggle('enlarged');
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FULL SCREEN IMAGENES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
document.addEventListener('DOMContentLoaded', function () {
  const imagenesFullscreen = document.querySelectorAll('.imagen-fullscreen');
  const fullscreenContainer = document.getElementById('imagen-fullscreen-container');

  imagenesFullscreen.forEach(function (imagen) {
    imagen.addEventListener('click', function () {
      // Clonar la imagen seleccionada para mostrarla en pantalla completa
      const imagenClonada = imagen.cloneNode(true);
      imagenClonada.classList.add('imagen-fullscreen-full');
      fullscreenContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen
      fullscreenContainer.appendChild(imagenClonada);

      // Mostrar el contenedor de imagen en pantalla completa
      fullscreenContainer.style.display = 'block';
    });
  });

  // Agregar evento de clic al contenedor de imagen en pantalla completa para cerrarlo
  fullscreenContainer.addEventListener('click', function () {
    // Ocultar el contenedor de imagen en pantalla completa
    fullscreenContainer.style.display = 'none';
  });
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FULL SCREEN VIDEOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function toggleFullscreenAndPlay(videoId) {
  const videoElement = document.getElementById(videoId);

  if (videoElement) {
      if (videoElement.paused) {
          // Si el video está pausado, lo reproducimos y lo ponemos en pantalla completa
          videoElement.play();
          if (videoElement.requestFullscreen) {
              videoElement.requestFullscreen();
          } else if (videoElement.mozRequestFullScreen) {
              videoElement.mozRequestFullScreen(); // Firefox
          } else if (videoElement.webkitRequestFullscreen) {
              videoElement.webkitRequestFullscreen(); // Chrome, Safari, Opera
          } else if (videoElement.msRequestFullscreen) {
              videoElement.msRequestFullscreen(); // Internet Explorer
          }
      } else {
          // Si el video está reproduciéndose, pausamos y salimos de pantalla completa si está en modo de pantalla completa
          if ((document.fullscreenElement && document.fullscreenElement === videoElement) ||
              (document.webkitFullscreenElement && document.webkitFullscreenElement === videoElement) ||
              (document.mozFullScreenElement && document.mozFullScreenElement === videoElement) ||
              (document.msFullscreenElement && document.msFullscreenElement === videoElement)) {

              if (document.exitFullscreen) {
                  document.exitFullscreen().then(() => {
                      videoElement.pause();
                  });
              } else if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen().then(() => {
                      videoElement.pause();
                  }); // Chrome, Safari, Opera
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen().then(() => {
                      videoElement.pause();
                  }); // Firefox
              } else if (document.msExitFullscreen) {
                  document.msExitFullscreen().then(() => {
                      videoElement.pause();
                  }); // Internet Explorer
              }
          } else {
              // Si el video está reproduciéndose pero no en pantalla completa, simplemente lo pausamos
              videoElement.pause();
          }
      }
  }
}

// Obtener todos los videos y agregar el evento de clic a cada uno
const videoElements = document.getElementsByClassName('video-item1');
for (let i = 0; i < videoElements.length; i++) {
  videoElements[i].addEventListener('click', function (event) {
      if ((document.fullscreenElement && document.fullscreenElement === this) ||
          (document.webkitFullscreenElement && document.webkitFullscreenElement === this) ||
          (document.mozFullScreenElement && document.mozFullScreenElement === this) ||
          (document.msFullscreenElement && document.msFullscreenElement === this)) {

          event.preventDefault(); // Evita el comportamiento predeterminado de hacer clic en el video mientras está en pantalla completa
          toggleFullscreenAndPlay(this.id);
      }
  });
}