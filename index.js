const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const min = window.document.getElementById('min')
const seg = window.document.getElementById('seg')

const inicio = "18 oct 2023"


function timer(){
    const dataFinal = new Date(inicio)
    const hoje = new Date()

    const segTotal = (dataFinal - hoje)/1000;

    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60)% 24;
    const finalMin = Math.floor(segTotal/60)% 60;
    const finalSeg = Math.floor(segTotal)% 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    min.innerHTML = formatoTempo(finalMin)
    seg.innerHTML = formatoTempo(finalSeg)  

}

function formatoTempo(tempo){
     return tempo < 10? `0${tempo}` : tempo
}

timer();
setInterval(timer, 1000)
