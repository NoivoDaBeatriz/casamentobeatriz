function calcularTempoJuntos() {
    let dataInicio = new Date("2024-11-02T00:00:00");

    function atualizarContador() {
        let dataAtual = new Date();
        let diferencaTempo = dataAtual - dataInicio;

        let dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
        document.getElementById("tempo-juntos").innerText = `${dias} dias juntos!`;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);
}

if (document.getElementById("tempo-juntos")) {
    calcularTempoJuntos();
}

function responder(resposta) {
    document.getElementById("resposta").innerHTML = `🥰 Você disse <strong>${resposta}!</strong> Eu sou a pessoa mais feliz do mundo! 💖`;
}

function moverBotao() {
    let botao = document.getElementById("nao-btn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;
}
