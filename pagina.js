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


function hideElements() {
  increaseSize();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesMama.style.display = 'flex';
    setTimeout(startImageTransition, 200);
  }, 800); // 800ms = 0.3s
}
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
function hideBotDescrip(elementId, buttonId) {// BOTONES / DESCRIPCION 
  var img = document.getElementById(buttonId);
  img.classList.add('pixelate');

  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones');
    for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
    }
    var descript = document.getElementById(elementId);
    descript.style.display = 'flex';  
  }, 500);

  var descript = document.getElementById(elementId);
  var audio = descript.querySelector("audio");   
  audio.currentTime = 0;
  audio.volume = 0.5;
  audio.play();
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
buttons.forEach(button => {
  button.addEventListener('focus', () => {
    button.classList.add('button-focus');
  });

  button.addEventListener('blur', () => {
    button.classList.remove('button-focus');
  });
});


function enlargeImages() { 
  var elementsToHide = document.querySelectorAll('.descripcion');  
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
 
  var images = document.getElementsByClassName('image');
  var currentIndex = 0;
  function enlargeNextImage() {
      if (currentIndex <= images.length) {
          if (currentIndex > 0) {
              images[currentIndex - 1].classList.remove('enlarged');
          }
          images[currentIndex].classList.add('enlarged');
          currentIndex++;
          setTimeout(enlargeNextImage, 197);
      }
  }
  parpadeo();
  enlargeNextImage();
}

function parpadeo() {
  var buttons = document.getElementsByClassName('button');  
  for (var i = 0; i < buttons.length; i++) { 
    setTimeout(function(button) {
      toggleButton(button);
    }, i * 200, buttons[i]);
  }
};

function toggleFullscreenAndPlay(videoId) {
    // Obtener todos los elementos de audio en la página
    var audios = document.getElementsByTagName('audio');
    // Recorrer todos los elementos de audio y detener su reproducción
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  var video = document.getElementById(videoId);
  if (video.requestFullscreen) {
    video.requestFullscreen().then(function() {
      playVideo(video);
    });
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen().then(function() {
      playVideo(video);
    });
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen().then(function() {
      playVideo(video);
    });
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen().then(function() {
      playVideo(video);
    });
  }
}

function playVideo(video) {
  video.play();
}

