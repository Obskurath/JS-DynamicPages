const listaDeTeclas = document.querySelectorAll('.tecla');

let playSonido = (tecla) => {
    document.querySelector(tecla).play();
}

for(let counter = 0; counter < listaDeTeclas.length ; counter++) {
    const tecla = listaDeTeclas[counter];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function () {
        playSonido(idAudio);
    };
    tecla.onkeydown = function (e) {
        if ( e.code === 'Space' ||  e.code === 'Enter') {
            tecla.classList.add('activa');
        }
        console.log(e)
    }


    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }
    
}


// document.querySelector('.tecla_pom').onclick = playSonido;
