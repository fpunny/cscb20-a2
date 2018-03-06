let nav = document.getElementById("nav");
let text = document.getElementById("nav-text");
let mobilenav = document.getElementById("nav-mobile-text");
let mobileback = document.getElementById("nav-mobile-backdrop");

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

function setMobileNav(state) {
  if (state) {
    mobilenav.style.display = "flex";
    mobileback.style.display = "flex";
  } else {
    mobilenav.style.display = "none";
    mobileback.style.display = "none";
  }
}
