const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        mostrarInfoDaAba(aba)
    })
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")
        aba.classList.add("selecionado")
}

function mostrarInfoDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    const idInfoAbas = `informacao-${aba.id}`;
    const infoMostrada = document.getElementById(idInfoAbas);
    infoMostrada.classList.add("selecionado");
}