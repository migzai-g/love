
const eventoData = new Date(2026, 2, 10, 0, 0, 0).getTime();


const x = setInterval(function() {


    const agora = new Date().getTime();


    const distancia = eventoData - agora;


    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);


    document.getElementById("contagem").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;


    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contagem").innerHTML = "DOIS ANOS TE AMO!";
    }
}, 1000);
