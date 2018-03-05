let nav = document.getElementById("nav");
let text = document.getElementById("nav-text");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop === 0) {
    nav.classList.remove("nav-dropped");
    text.style.color = "white";
    nav.style.color = "white";
  } else {
    nav.classList.add("nav-dropped");
    text.style.color = "#3b3b3b";
    nav.style.color = "#3b3b3b";
  }
});
