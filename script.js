window.addEventListener("scroll", () => {
  let nav = document.getElementById("nav");
  if (document.body.scrollTop === 0) {
    nav.style.height = "90px";
  } else {
    nav.style.height = "60px";
  }
});
