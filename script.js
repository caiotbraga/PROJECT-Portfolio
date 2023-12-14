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

function toggleButtons() {
    var btnHeader = document.getElementById("btn-header");
    var btnRede = document.getElementById("btn-rede");

    if (btnHeader.style.display === "block") {
        btnHeader.style.display = "none";
        btnRede.style.display = "block";
    } else {
        btnHeader.style.display = "block";
        btnRede.style.display = "none";
    }
}

// document.getElementById('btn-header').addEventListener('click', function() {
//     toggleRedesSociais();
// });