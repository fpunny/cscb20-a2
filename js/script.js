let nav = document.getElementById("nav");
let text = document.getElementById("nav-text");
let mobilenav = document.getElementById("nav-mobile-text");
let mobileback = document.getElementById("nav-mobile-backdrop");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop === 0) {
    nav.classList.remove("nav-dropped");
    text.style.color = "white";
    nav.style.color = "white";

    var a = document.querySelectorAll("#nav-text a");
    [].forEach.call(a, function(i) {
      i.classList.remove("nax-text-hover");
    });

  } else {
    nav.classList.add("nav-dropped");
    text.style.color = "#3b3b3b";
    nav.style.color = "#3b3b3b";

    var a = document.querySelectorAll("#nav-text a");
    [].forEach.call(a, function(i) {
      i.classList.add("nax-text-hover");
    });

  }
});

function setMobileNav(state) {
  if (state) {
    mobileback.style.display = "flex";
    mobilenav.style.display = "flex";
    mobilenav.style.opacity = 0;

    (function fade() {
      var val = parseFloat(mobilenav.style.opacity);
      if (!((val += .05) > 1)) {
        mobilenav.style.opacity = val;
        mobileback.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  } else {
    (function fade() {
      if ((mobilenav.style.opacity -= .05, mobileback.style.opacity -= .05) < .05) {
        mobilenav.style.display = "none";
        mobileback.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
}
