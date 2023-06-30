const botoneraInicial = document.querySelectorAll('button')
const etiquetaInicial = document.getElementsByClassName('etiqueta')    

 const botonesMama = document.getElementById('botones-pinedas')
 const botonesDuarte = document.getElementById('botones-duarte')
 const botonesLondoño = document.getElementById('botones-londoño')
 const botonesToro = document.getElementById('botones-toro')
 const botonesMuñoz = document.getElementById('botones-muñoz')
 const botonesMira = document.getElementById('botones-mira')
 const botonesGarcia = document.getElementById('botones-garcia')  
 const botonSilvi = document.getElementById('mi-botSilvi')          
 const botonSilvia = document.getElementById('botSilvia')


 const descripciones = document.getElementById('descripciones')
 const descripcion = document.getElementsByClassName('descripcion')
 const descripcionOlga = document.getElementById('descripcion-olga') 
 const descripcionTina = document.getElementById('descripcion-tina')
 const descripcionMany = document.getElementById('descripcion-many') 
 const descripcionBomba = document.getElementById('descripcion-bomba') 
 const descripcionNey = document.getElementById('descripcion-ney')   
 const descripcionSilvi = document.getElementById('descripcion-silvi')
 const descripcionMaca = document.getElementById('descripcion-maca')
 const descripcionJuli = document.getElementById('descripcion-juli')
 const descripcionDaniela = document.getElementById('descripcion-daniela')  
 const descripcionSara = document.getElementById('descripcion-sara')
 const descripcionMoni = document.getElementById('descripcion-moni')
 const descripcionNena = document.getElementById('descripcion-nena')
 const descripcionCata = document.getElementById('descripcion-cata')
 const descripcionDani = document.getElementById('descripcion-dani')
 const descripcionyop = document.getElementById('descripcion-yop')
 const descripcionMario = document.getElementById('descripcion-mario')
 const descripcionSebas = document.getElementById('descripcion-sebas')
 const descripcionIsabel = document.getElementById('descripcion-isabel')
 const descripcionFer = document.getElementById('descripcion-fer')
 const descripcionMaritza = document.getElementById('descripcion-maritza')
 const descripcionAndres = document.getElementById('descripcion-andres')
 const descripcionManola = document.getElementById('descripcion-manola')




    

 
 const arrayDescripciones = [
  document.getElementById('descripcion-olga'),
  document.getElementById('descripcion-tina'),
  document.getElementById('descripcion-many'),
  document.getElementById('descripcion-bomba')
];
           
 const bloqueTina = document.getElementById('bloque-tina')
 const bloqueOlga = document.getElementById('descripcion-olga')
 const contenedor = document.getElementById('contenedor')

 const videosContenedor = document.getElementById('video-v')
 const videoMama = document.getElementById('video-mama')
 const videoTina = document.getElementById('video-tina')
 const videoMany = document.getElementById('video-many')
 const videoBomba = document.getElementById('video-bomba')
 const videoJuli = document.getElementById('video-juli')
 const videoMaca = document.getElementById('video-maca')
 const videoMoni = document.getElementById('video-moni')
 const videoNena = document.getElementById('video-nena')
 const videoCata = document.getElementById('video-cata')
 const videoDani = document.getElementById('video-dani')
 const videoYop = document.getElementById('video-juan')
 const videoMario = document.getElementById('video-mario')
 const videoSebas = document.getElementById('video-sebas')
 const videoIsabel = document.getElementById('video-isabel')
 const videoDaniela = document.getElementById('video-daniela')
 const videoSara = document.getElementById('video-sara')
 const videoNey = document.getElementById('video-ney')
 const videoSilvia = document.getElementById('video-silvi')
 const videoFer = document.getElementById('video-fer')
 const videoMaritza = document.getElementById('video-maritza')
 const videoAndres = document.getElementById('video-andres')
 const videoManola = document.getElementById('video-manola')


 const botonera = document.getElementsByClassName('botones')
 const botonOlga = document.getElementById('boton-olga') 
 const botonOlga1 = document.getElementById('boton-olga-v')
 const botonTina1 = document.getElementById('boton-tina-v')
 const botonMany1 = document.getElementById('boton-many-v')

 const imagenesContenedor = document.getElementById('imagenes') 
 const imagenesTina = document.getElementById('imagenes-tina')
 const imagenes = document.querySelectorAll('imagenes-i')
 const imagenMama = document.getElementById('imagen-mama')
 const imagenesMama = document.getElementById('imagenes-mama')
 const imagenesBomba = document.getElementById('imagenes-bomba')
 const imagenesMany = document.getElementById('imagenes-many')
 const imagenesNey = document.getElementById('imagenes-ney')
 const imagenesSilvi = document.getElementById('imagenes-silvi')
 const imagenesMaca = document.getElementById('imagenes-maca')
 const imagenesJuli = document.getElementById('imagenes-juli')
 const imagenesSara = document.getElementById('imagenes-sara')
 const imagenesDaniela = document.getElementById('imagenes-daniela')
 const imagenesMoni = document.getElementById('imagenes-moni')
 const imagenesNena = document.getElementById('imagenes-nena')
 const imagenesCata = document.getElementById('imagenes-cata')
 const imagenesDani = document.getElementById('imagenes-dani')
 const imagenesYop = document.getElementById('imagenes-juan')
 const imagenesMario = document.getElementById('imagenes-mario')
 const imagenesSebas = document.getElementById('imagenes-sebas')
 const imagenesIsabel = document.getElementById('imagenes-isabel')
 const imagenesFer = document.getElementById('imagenes-fer')
 const imagenesMaritza = document.getElementById('imagenes-maritza')
 const imagenesAndres = document.getElementById('imagenes-andres')
 const imagenesManola = document.getElementById('imagenes-manola')

 const buttons = document.querySelectorAll('.button-neon')
 
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 function increaseSize() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize1() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale1');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize2() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale2');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize3() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale3');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize4() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale4');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize5() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale5');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}
function increaseSize6() {   // AUMENTO BOTONES INICIALES
  var buttonToScale = document.getElementById('buttonToScale6');
  buttonToScale.classList.add('scale');
  setTimeout(function() {
    buttonToScale.classList.remove('scale');
  }, 300); // 700ms = 0.7s
}




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

function hideElements1() {     // OCULTA BOTONES y MUESTRA DESCRIPCION TINA 
  var elementsToHide2 = document.querySelectorAll('.boton')
    for (var i = 0; i < elementsToHide2.length; i++) {
        elementsToHide2[i].style.display = 'none';
    }
    descripciones.style.display='flex'
    descripcionTina.style.display='none'
}  
function hideElements2() {   //  OCULTA DESCRIPCION Y MUESTRA VIDEOS                  
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');   
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-mama');
videoOlga.style.display = 'flex';    
}
function hideElements3() {
  var img = document.getElementById('mi-boton0');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-olga');
    descripcionOlga.style.display = 'flex';

  }, 500);
}
function hideElements4() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-mama');
videoOlga.style.display = 'flex';
} 
function hideElements5() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-mama');
  videoOlga.style.display = 'flex';

} 
function hideElements6() {        // OCULTA FOTOS MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-mama');
  videoOlga.style.display = 'flex';
} 
function hideElements7() {
  var img = document.getElementById('button-tina');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-tina');
    descripcionOlga.style.display = 'flex';

  }, 500);
}
function hideElements8() {   
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoTina = document.getElementById('video-tina');
videoTina.style.display = 'flex';

} 
function hideElements9() { 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-tina');
videoOlga.style.display = 'flex';
} 
function hideElements10() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-tina');
  videoOlga.style.display = 'flex';
}  
function hideElements11() {        // OCULTA FOTOS MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-tina');
  videoOlga.style.display = 'flex';
} 
function hideElements12() { 
  increaseSize1();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesDuarte.style.display = 'flex';
    setTimeout(startImageTransition4, 200);
  }, 800); // 800ms = 0.3s
} 
function hideElements13() {    
  var img = document.getElementById('mi-botMany');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-many');
    descripcionOlga.style.display = 'flex';

  }, 500);

}  
function hideElements14() {    
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-many');
videoOlga.style.display = 'flex';
} 
function hideElements15() {     
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-many');
videoOlga.style.display = 'flex';
} 
function hideElements16() {        // OCULTA FOTOS MUESTRA VIDEOS MANY
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-many');
  videoOlga.style.display = 'flex';
} 
function hideElements17() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-many');
  videoOlga.style.display = 'flex';
}
function hideElements18() {
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-bomba');
videoOlga.style.display = 'flex';
}
function hideElements19() {
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-bomba');
videoOlga.style.display = 'flex';

}
function hideElements20() {
  var img = document.getElementById('mi-botBomba');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-bomba');
    descripcionOlga.style.display = 'flex';

  }, 500);
}function hideElements21() {
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-bomba');
  videoOlga.style.display = 'flex';

}
function hideElements22() {
  var img = document.getElementById('mi-botNey');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-ney');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements23() {     
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-ney');
videoOlga.style.display = 'flex';
} 
function hideElements24() {        // OCULTA FOTOS MUESTRA VIDEOS BOMBA
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-bomba');
  videoOlga.style.display = 'flex';
}
function hideElements25() { 
  increaseSize2();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesLondoño.style.display = 'flex';
    setTimeout(startImageTransition3, 200);
  }, 800); // 800ms = 0.3s
} 
function hideElements26() {     // OCULTA BOTONES y MUESTRA DESCRIPCION
  var img = document.getElementById('mi-botSilvi');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-silvi');
    descripcionOlga.style.display = 'flex';

  }, 500);
  var audio = document.getElementById('silvi');
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();

}  
function hideElements27() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');  
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-silvi');
videoOlga.style.display = 'flex';
} 
function hideElements28() {
  increaseSize3();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesToro.style.display = 'flex';
    setTimeout(startImageTransition5, 200);
  }, 800); // 800ms = 0.3s
}
function hideElements29() {     // OCULTA BOTONES y MUESTRA DESCRIPCION
  var img = document.getElementById('mi-botMaca');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-maca');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements30() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-maca');
videoOlga.style.display = 'flex';
} 
function hideElements31() {    //  OCULTA BOTONES  MUESTRA DESCRIPCION
  var img = document.getElementById('mi-botJuli');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-juli');
    descripcionOlga.style.display = 'flex';

  }, 500); 
} 
function hideElements32() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS
  var elementsToHide = document.querySelectorAll('.descripcion, .botones');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  imagenesContenedor.style.display='flex'
  imagenesSara.style.display='flex'
  imagenesMama.style.display='none'
  imagenesMany.style.display='none'
  imagenesTina.style.display='none'

  imagenesSilvi.style.display='none'

} 
function hideElements33() {    //  DESCRIPCION / FOTOS JULIANA
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-juli');
videoOlga.style.display = 'flex';
} 
function hideElements34() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.imagenes');
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-juli');
  videoOlga.style.display = 'flex';
}
function hideElements35() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.video-v');
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-juli');
  videoOlga.style.display = 'flex';
} 
function hideElements36() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-juli');
videoOlga.style.display = 'flex';
} 
function hideElements37() {    //  OCULTA BOTONES  MUESTRA DESCRIPCION SARA
  var img = document.getElementById('mi-botSara');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-sara');
    descripcionOlga.style.display = 'flex';

  }, 500); 

}
function hideElements38() {    //  DESCRIPCION / FOTOS SARA
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-sara');
videoOlga.style.display = 'flex';
} 
function hideElements39() {    //  OCULTA BOTONES  MUESTRA DESCRIPCION 
  var img = document.getElementById('mi-botDaniela');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-daniela');
    descripcionOlga.style.display = 'flex';

  }, 500); 
}
function hideElements40() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-maca');
videoOlga.style.display = 'flex';

} 
function hideElements41() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-maca');
  videoOlga.style.display = 'flex';
} 
function hideElements42() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-maca');
  videoOlga.style.display = 'flex';
} 
function hideElements43() {    //  DESCRIPCION /  FOTOS DANIELA
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-daniela');
videoOlga.style.display = 'flex';
} 
function hideElements44() { 
  increaseSize4();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesMuñoz.style.display = 'flex';
    setTimeout(startImageTransition6, 200);
  }, 800); // 800ms = 0.3s
} 
function hideElements45() {    //  OCULTA BOTONES  MUESTRA DESCRIPCION SARA
  var img = document.getElementById('butMoni');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-moni');
    descripcionOlga.style.display = 'flex';
  }, 500); 
  var audio = document.getElementById('moni');
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();  
}
function hideElements46() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-moni');
videoOlga.style.display = 'flex';
} 
function hideElements47() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-moni');
videoOlga.style.display = 'flex';

} 
function hideElements48() {
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-moni');
  videoOlga.style.display = 'flex';
}           
function hideElements49() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-moni');
  videoOlga.style.display = 'flex';
}
function hideElements50() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('mi-boton3');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-nena');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements51() {    //  OCULTA DESCRIPCION Y MUESTRA FOTOS NENA
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-nena');
videoOlga.style.display = 'flex';
} 
function hideElements52() {
  var elementsToHide = document.querySelectorAll('.descripcion, .botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }
  
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }

  var videoContainers = document.getElementsByClassName("video-v");
  for (var i = 0; i < videoContainers.length; i++) {
    videoContainers[i].style.display = "none";
  }
  
  var videoNena = document.getElementById("video-nena");
  videoNena.style.display = "flex";
}
function hideElements53() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-nena');
  videoOlga.style.display = 'flex';
} 
function hideElements54() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-nena');
  videoOlga.style.display = 'flex';
}
function hideElements55() {       // OCULTA ESCUDOS MUESTRA BOTONES
  increaseSize5();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesMira.style.display = 'flex';
    setTimeout(startImageTransition2, 200);
  }, 800); // 800ms = 0.3s
} 
function hideElements56() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var audio = document.getElementById('cata');
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();

  var img = document.getElementById('button-cata');
  img.classList.add('pixelate');            
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');       
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-cata');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements57() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-cata');
videoOlga.style.display = 'flex';
} 
function hideElements58() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-cata');
videoOlga.style.display = 'flex';
} 
function hideElements59() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-cata');
  videoOlga.style.display = 'flex';
}
function hideElements60() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('button-dani');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-dani');
    descripcionOlga.style.display = 'flex';
    var slidVisible = document.getElementsByClassName('slide');
    slidVisible.style.display ='flex';
    
  }, 500);
  var audio = document.getElementById('dani');
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();
}
function hideElements61() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-dani');
videoOlga.style.display = 'flex';
} 
function hideElements62() {    //  OCULTA DESCRIPCION MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-dani');
videoOlga.style.display = 'flex';
} 
function hideElements63() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-dani');
  videoOlga.style.display = 'flex';
} 
function hideElements64() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-dani');
  videoOlga.style.display = 'flex';
}
function hideElements65() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('button-juan');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-yop');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements66() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-juan');
videoOlga.style.display = 'flex';
} 
function hideElements67() {    //  OCULTA DESCRIPCION MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-juan');
  videoOlga.style.display = 'flex';
} 
function hideElements68() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-juan');
  videoOlga.style.display = 'flex';
} 
function hideElements69() {        // OCULTA FOTOS MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-juan');
  videoOlga.style.display = 'flex';
}
function hideElements70() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('button-mario');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-mario');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements71() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-mario');
videoOlga.style.display = 'flex';
} 
function hideElements72() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-mario');
  videoOlga.style.display = 'flex';
} 
function hideElements73() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-mario');
  videoOlga.style.display = 'flex';
} 
function hideElements74() {    //  OCULTA DESCRIPCION MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-mario');
  videoOlga.style.display = 'flex';
} 
function hideElements75() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('mi-botSebas');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-sebas');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements76() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-sebas');
videoOlga.style.display = 'flex';
} 
function hideElements77() {    //  OCULTA DESCRIPCION MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-sebas');
videoOlga.style.display = 'flex';

} 
function hideElements78() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-sebas');
  videoOlga.style.display = 'flex';
} 
function hideElements79() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-sebas');
  videoOlga.style.display = 'flex';

} 
function hideElements80() {          // OCULTA BOTONES MUESTRA DESCRIPCION
  var img = document.getElementById('mi-botChava');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-isabel');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements81() {    //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-isabel');
videoOlga.style.display = 'flex';
} 
function hideElements82() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-isabel');
  videoOlga.style.display = 'flex';

} 
function hideElements83() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-isabel');
  videoOlga.style.display = 'flex';

} 
function hideElements84() {    //  OCULTA DESCRIPCION MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-isabel');
videoOlga.style.display = 'flex';

} 
function hideElements85() {   // DESCRIPCION / VIDEOS DANIELA
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-daniela');
videoOlga.style.display = 'flex';
} 
function hideElements86() {        // OCULTA VIDEOS Y MUESTRA FOTOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-daniela');
  videoOlga.style.display = 'flex';
} 
function hideElements87() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-daniela');
  videoOlga.style.display = 'flex';
} 
function hideElements88() {   //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-sara');
videoOlga.style.display = 'flex';
} 
function hideElements89() {        // OCULTA VIDEOS Y MUESTRA FOTOS SARA 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-sara');
  videoOlga.style.display = 'flex';
} 
function hideElements90() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-sara');
  videoOlga.style.display = 'flex';
} 
function hideElements91() {   //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-ney');
videoOlga.style.display = 'flex';
} 
function hideElements92() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-ney');
  videoOlga.style.display = 'flex';

} 
function hideElements93() {        // OCULTA VIDEOS Y MUESTRA FOTOS SARA 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-ney');
  videoOlga.style.display = 'flex';
} 
function hideElements94() {   //  OCULTA DESCRIPCION Y MUESTRA VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-silvi');
videoOlga.style.display = 'flex';
} 
function hideElements95() {        // OCULTA VIDEOS Y MUESTRA FOTOS SILVI
  var elementsToHide = document.querySelectorAll('.videos');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  videosContenedor.style.display='none'
  imagenesContenedor.style.display='flex' 
  imagenesSilvi.style.display='flex'
  imagenesMario.style.display='none'
  imagenesMany.style.display='none'
  imagenesTina.style.display='none'
  imagenesMama.style.display='none'

} 
function hideElements96() {        // OCULTA VIDEOS Y MUESTRA FOTOS SILVI 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-silvi');
  videoOlga.style.display = 'flex';
}   
function hideElements97() {        // OCULTA FOTOS Y MUESTRA VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-silvi');
  videoOlga.style.display = 'flex';
} 
function hideElements98() {          // BOTONES / DESCRIPCION
  var elementsToHide = document.querySelectorAll('.botones');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  } 
  descripciones.style.display='flex'
  descripcionSebas.style.display='none'
  descripcionOlga.style.display='none'
  descripcionTina.style.display='none'
  descripcionMany.style.display='none'
  descripcionFer.style.display='flex'

}
function hideElements99() {   //  DESCRIPCION / VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-maritza');
videoOlga.style.display = 'flex';
} 
function hideElements100() {    //  DSCRIPCION / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');   
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-fer');
  videoOlga.style.display = 'flex';

} 

function hideElements101() {        // VIDEOS / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-maritza');
  videoOlga.style.display = 'flex';
} 
function hideElements102() {        // FOTOS / VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-maritza');
  videoOlga.style.display = 'flex';
}
function hideElements103() {    //  ESCUDOS / BOTONES 
  increaseSize6();

  setTimeout(function() {
    var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');   

    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    botonesGarcia.style.display = 'flex';
    setTimeout(startImageTransition1, 200);
  }, 800); // 800ms = 0.3s
}
function hideElements104() {          // BOTONES / DESCRIPCION
  var img = document.getElementById('button-maritza');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-maritza');
    descripcionOlga.style.display = 'flex';

  }, 500);
}
function hideElements105() {     // BOTONES / DESCRIPCION
  var img = document.getElementById('button-andres');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-andres');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements106() {    //  DESCRIPCION / VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-andres');
videoOlga.style.display = 'flex';
} 
function hideElements107() {    // VIDEOS / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-andres');
  videoOlga.style.display = 'flex';
} 
function hideElements108() {    // BOTONES / DESCRIPCION
  var img = document.getElementById('button-fer');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-fer');
    descripcionOlga.style.display = 'flex';

  }, 500);

}
function hideElements109() {    //  DESCRIPCION / VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-fer');
videoOlga.style.display = 'flex';
} 
function hideElements110() {    // VIDEOS / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-fer');
  videoOlga.style.display = 'flex';
} 
function hideElements111() {    // FOTOS / VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-fer');
  videoOlga.style.display = 'flex';
}
function hideElements112() {    //  DSCRIPCION / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-andres');
  videoOlga.style.display = 'flex';

} 
function hideElements113() {    //  DSCRIPCION / FOTOS
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');            
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }

  var videoOlga = document.getElementById('imagenes-maritza');
  videoOlga.style.display = 'flex';
} 
function hideElements114() {    // BOTONES / DESCRIPCION
  var img = document.getElementById('butManola');
  img.classList.add('pixelate');
  
  setTimeout(function() {
    img.classList.remove('pixelate');

    var elementsToHide = document.querySelectorAll('.botones, .imagenes-i'); 
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    var contenedoresPadre = document.getElementsByClassName('descripcion');
    for (var i = 0; i < contenedoresPadre.length; i++) {
      contenedoresPadre[i].style.display = 'none';
    }  
    var descripcionOlga = document.getElementById('descripcion-manola');
    descripcionOlga.style.display = 'flex';

  }, 500);
  var audio = document.getElementById('manola');
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();
}
function hideElements115() {    //  DSCRIPCION / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
  }
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('imagenes-manola');
videoOlga.style.display = 'flex';
} 
function hideElements116() {    //  DESCRIPCION / VIDEOS
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
var contenedoresPadre = document.getElementsByClassName('descripcion');
for (var i = 0; i < contenedoresPadre.length; i++) {
  contenedoresPadre[i].style.display = 'none';
}
var videoOlga = document.getElementById('video-manola');
videoOlga.style.display = 'flex';
} 
function hideElements117() {    // FOTOS / VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-manola');
  videoOlga.style.display = 'flex';
}
function hideElements118() {    // VIDEOS / FOTOS
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .video-v');
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('imagenes-manola');
  videoOlga.style.display = 'flex';

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
function hideElements119() {    // FOTOS / VIDEOS 
  var elementsToHide = document.querySelectorAll('.descripciones');
  var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');     
  for (var i = 0; i < elementsToHide.length; i++) { 
      elementsToHide[i].style.display = 'none';
  }
  var contenedoresPadre = document.getElementsByClassName('descripcion');
  for (var i = 0; i < contenedoresPadre.length; i++) {
    contenedoresPadre[i].style.display = 'none';
  }
  var videoOlga = document.getElementById('video-andres');
  videoOlga.style.display = 'flex';
}

function hideElements120() {
  var elementsToHide = document.getElementsByClassName("descripcion");
  for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
  }
  var imagenesToHide = document.getElementsByClassName("botones");
  for (var i = 0; i < imagenesToHide.length; i++) {
    imagenesToHide[i].style.display = "none";
  }
  var botonesToHide = document.getElementsByClassName("imagenes-i");
  for (var i = 0; i < botonesToHide.length; i++) {
    botonesToHide[i].style.display = "none";
  }
  var elementos = document.getElementsByClassName("video-v");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
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

function ocultarAlerta() {
  var mensError = document.getElementById('error-message')
  mensError.style.display='none'

  var passwordInput = document.getElementById('password-input');
  passwordInput.focus();
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function toggleButton(button) {
  button.style.background = '#00ff00';
  button.style.boxShadow = '0 0 10px #00ff00, 0 0 40px #ff0000, 0 0 80px #ffff00';
  button.style.color = 'blue';
  setTimeout(function() {
    button.style.background = 'blue';
    button.style.boxShadow = '';
    button.style.color = 'yellow';
  }, 200);
}

function changeColor(button) {
  button.style.backgroundColor = 'rgb(0, 255, 0)'; // Cambia el color de fondo a verde
}

function restoreColor(button) {
  button.style.backgroundColor = 'blue'; // Restaura el color de fondo original
}

window.addEventListener('load', function() {
  var buttons = document.getElementsByClassName('button');
  for (var i = 0; i <= buttons.length; i++) {
    setTimeout(function(button) {
      toggleButton(button);
    }, i * 200, buttons[i]);
  }
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


  var speeds = [0.4, 0.35, 0.3, 0.25, 0.3, 0.5, 0.7];


  var imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(function(container) {
  var images = container.getElementsByTagName('img');
  
  Array.from(images).forEach(function(img, index) {
    img.style.animation = 'moveImage ' + speeds[index] + 's linear forwards';    
  });
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  AUMENTO ALEATORIO DE IMAGENES EN BOTONERAS   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function startImageTransition() {
  document.getElementById("mi-boton1").style.animation = "zoomEffect1 0.8s";
  document.getElementById("mi-boton0").style.animation = "zoomEffect2 1s";
  document.getElementById("button-tina").style.animation = "zoomEffect3 0.6s";
  document.getElementById("mi-boton3").style.animation = "zoomEffect4 0.4s";
}
function startImageTransition2() {
  document.getElementById("button-cata").style.animation = "zoomEffect1 1s";
  document.getElementById("button-mario").style.animation = "zoomEffect2 0.8s";
  document.getElementById("button-juan").style.animation = "zoomEffect3 0.6s";
  document.getElementById("button-dani").style.animation = "zoomEffect4 0.4s";
}
function startImageTransition3() {
  document.getElementById("mi-botSilvi").style.animation = "zoomEffect1 0.3s";
}
function startImageTransition4() {
  document.getElementById("mi-botBomba").style.animation = "zoomEffect1 1s";
  document.getElementById("mi-botMany").style.animation = "zoomEffect2 0.8s";
  document.getElementById("mi-botNey").style.animation = "zoomEffect3 0.6s";
  document.getElementById("mi-botSebas").style.animation = "zoomEffect4 0.4s";
  document.getElementById("mi-botChava").style.animation = "zoomEffect1 0.2s";
}
function startImageTransition5() {
  document.getElementById("mi-botMaca").style.animation = "zoomEffect1 1s";
  document.getElementById("mi-botJuli").style.animation = "zoomEffect2 0.8";
  document.getElementById("mi-botSara").style.animation = "zoomEffect3 0.6s";
  document.getElementById("mi-botDaniela").style.animation = "zoomEffect4 0.4s";
}
function startImageTransition6() {
  document.getElementById("butMoni").style.animation = "zoomEffect1 1s";
  document.getElementById("butOrle").style.animation = "zoomEffect2 0.8s";
  document.getElementById("butManola").style.animation = "zoomEffect3 0.6s";
  document.getElementById("butIsabel").style.animation = "zoomEffect4 0.4s";
  document.getElementById("butMorelia").style.animation = "zoomEffect5 0.2s";
  document.getElementById("butNena").style.animation = "zoomEffect6 0.5s";
}
function startImageTransition1() {
  document.getElementById("button-fer").style.animation = "zoomEffect1 0.6s";
  document.getElementById("button-andres").style.animation = "zoomEffect2 0.8s";
  document.getElementById("button-maritza").style.animation = "zoomEffect3 1s";
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VIDEOS FULL SCREEN Y REPRODUCIR  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function toggleFullscreenAndPlay(videoId) {
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
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  PARA EL VIDEO AL SALIR DE FULL SCRENN     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

document.addEventListener('fullscreenchange', exitFullscreenHandler);
document.addEventListener('webkitfullscreenchange', exitFullscreenHandler);
function exitFullscreenHandler() {
  var videos = document.getElementsByClassName('video-item1');
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !video.paused) {
      stopVideo(video);
    }
  }
}
function stopVideo(video) {           
  video.pause();
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CONTRASEÑA<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function comprobarPassword() {   // MUESTRA LA INTERFAZ DE CONTRASEÑA
  var passwordInput = document.getElementById('password-input');
  var elementsToShow = document.querySelectorAll('#password-overlay');
  for (var i = 0; i < elementsToShow.length; i++) {
    elementsToShow[i].style.display = 'flex';
  }
  passwordInput.focus();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    var elementsToHide = document.querySelectorAll('#password-overlay'); 
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = 'none';
    }
    document.getElementById("password-input").value = "";
  }
}
);


function validatePassword() {   //  BOTON PARA COMPROBAR LA CONTRASEÑA
  // Obtener el valor del campo de contraseña
  var passwordInput = document.getElementById('password-input').value;     

  // Comprobar si la contraseña es correcta
  if (passwordInput === '1993') {
    // Ocultar el contenedor de contraseña
    var passwordContainer = document.querySelector('#password-overlay');
    passwordContainer.style.display = 'none';                     
    document.getElementById("password-input").value = "";

    hideElements60()
    
  } else {
    var menserror = document.getElementById('error-message')
    menserror.style.display='block'
    document.getElementById("password-input").value = "";    
  }
}

