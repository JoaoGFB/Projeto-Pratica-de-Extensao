document.addEventListener("DOMContentLoaded", function () {
    //seleciona as sections da página
    const secoes = document.querySelectorAll("section");

    //fnção (método) para aparecer as sections conforme o usuário rola (scroll) a página
    function revelarAoRolar() {
        //define um ponto de ativação baseado na altura da janela do navegador
        const pontoDeAtivacao = window.innerHeight * 0.85;

        //faz isso para todas as sections
        secoes.forEach(secao => {
            //obtém a posição da section em relação à tela
            const topoDaSecao = secao.getBoundingClientRect().top;

            //se a section estiver visível no ponto de ativação ela aparece
            if (topoDaSecao < pontoDeAtivacao) {
                secao.classList.add("visible");
            }
        });
    }

    //é o que chama a função quando o usuário rolar a página
    window.addEventListener("scroll", revelarAoRolar);

    //chama a função para revelar seções já visíveis 
    revelarAoRolar();
});