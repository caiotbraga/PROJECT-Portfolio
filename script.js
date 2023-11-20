const menuLinks = document.querySelectorAll('.menu-desktop a[href^="#"]');

console.log(menuLinks)

menuLinks.forEach((link) => {
    link.addEventListener("click", () => console.log("Clicked!"));
});
// function scrollToSection(event) {
//     event.preventDefault();
//     const element = event.target;
//     const id = element.getAttribute("href");
//     const section = document.querySelector(id);
//     console.log(section.offsetTop)
// }

// menuLinks.forEach((link) => {
//     link.addEventListener("click", scrollToSection);
// })