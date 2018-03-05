let nav = document.getElementById("nav");
let text = document.getElementById("nav-text");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop === 0) {
    nav.style.height = "90px";
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "";

    text.style.color = "white";
  } else {
    nav.style.height = "60px";
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";

    text.style.color = "#3b3b3b";
  }
});
