let nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop === 0) {
    nav.style.height = "90px";
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "";
  } else {
    nav.style.height = "60px";
    nav.style.backgroundColor = "#108ce4";
    nav.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
  }
});
