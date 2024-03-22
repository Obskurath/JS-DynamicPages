const listaDeTeclas = document.querySelectorAll('.tecla');

let playSonido = (tecla) => {
    document.querySelector(tecla).play();
}

for(let counter = 0; counter < listaDeTeclas.length ; counter++) {
    const tecla = listaDeTeclas[counter];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)
    console.log(counter)

    tecla.onclick = function () {
        playSonido(idAudio);
    };
}


// document.querySelector('.tecla_pom').onclick = playSonido;
