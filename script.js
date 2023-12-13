document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
        link.addEventListener("click", scrollSmooth);
    });

    function scrollSmooth(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }
});

function toggleRedesSociais() {
    var btnText = document.getElementById('btn-header');
    var sociais = document.getElementById('btn-rede');
    
    document.getElementById('btn-header').addEventListener('click', function() {
        btnText.style.display = 'none';
    });
}

document.getElementById('btn-header').addEventListener('click', function() {
    toggleRedesSociais();
});