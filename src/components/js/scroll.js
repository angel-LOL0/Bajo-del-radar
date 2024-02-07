
const elemento = document.querySelector("#scroll");

function onScroll() {
  if (window.scrollY > 0) {
    elemento.classList.add("bg-white");
  } else {
    elemento.classList.remove("bg-white");
  }
}

window.addEventListener("scroll", onScroll);
