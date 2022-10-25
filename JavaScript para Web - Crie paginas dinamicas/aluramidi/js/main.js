function tocaSomComId(id) {

    const obj = document.querySelector(id);

    if (obj && obj.localName === 'audio') {
        obj.play();
    } else {
        console.error("Element not found or is not a audio element");
    }
}

function tocaSom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const id = tecla.classList.item(1);
    const idAudio = `#som_${id}`;

    tecla.onclick = function () {
        tocaSomComId(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}