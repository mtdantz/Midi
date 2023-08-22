
function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const IdTocaAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(IdTocaAudio)
    };
    
//onkeydown é a ação para quando clicamos numa tecla no teclado...nao quando pressionamos, apenas um toque para apertar
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa')

        } 
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}