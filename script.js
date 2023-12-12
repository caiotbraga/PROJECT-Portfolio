document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de clique para todos os links do menu
    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.addEventListener("click", scrollSmooth);
    });

    // Função para rolar suavemente para a seção correspondente
    function scrollSmooth(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }
});