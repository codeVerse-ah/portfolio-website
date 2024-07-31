//navbar

const navBar = document.querySelector(".navbar-item");
const menuBar = document.querySelector("#menu-bar");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuBar.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navBar.classList.remove("active");
  menuBar.classList.remove("bx-x");
});












//scrollreveal

const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 2500,
  delay: 300,
  // reset: true,
});

sr.reveal(".home .content", { delay: 500, origin: "top" });
sr.reveal(".home .image", { delay: 500, origin: "right" });
sr.reveal(".heading, .about .content , .about .image, .interest", {
  delay: 300,
  origin: "top",
  interval: 200,
});
sr.reveal(".service .box", { delay: 300, scale: 0.75 });
sr.reveal(".skill .content", { delay: 500, origin: "left" });
sr.reveal(".skill .progress-bar", { delay: 500, origin: "right" });
sr.reveal(".portfolio .box", {
  delay: 500,
  x: 20,
  z: 10,
});
sr.reveal(".contact .info", { delay: 500, origin: "top" });
sr.reveal(".contact form", { delay: 500, origin: "right" });
sr.reveal(".contact .map", { delay: 500, origin: "left" });
