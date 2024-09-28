// menu.js

console.log("Executando menu.js");

// Seleciona os elementos do DOM
const navBarMenu = document.querySelector('.nbs-navbar__menu'),
  btnHambMenu = document.querySelector('[data-btn="hamb-menu"]'),
  hambMenuIcon = document.querySelector('[data-icon="hamb-menu-icon"]'),
  mobileNavBodyOverlay = document.querySelector('.nbs-navbar__body-overlay'),
  navLinks = document.querySelectorAll('.nbs-navbar__menu-link');


function toggleOpen() {
  hambMenuIcon.classList.remove("fa-xmark");
  hambMenuIcon.classList.add("fa-bars");
}

function toggleClose() {
  hambMenuIcon.classList.remove("fa-bars");
  hambMenuIcon.classList.add("fa-xmark");
}

function showOrHideNavBarBodyOverlay(showOrHide) {
  mobileNavBodyOverlay.style.display = showOrHide === 0 ? "none" : "block";
}
// Eventos
//

btnHambMenu.onclick = function (e) {
  //console.log("0:menu:js.btnHambMenu()");
  if (!navBarMenu.classList.contains("active")) {
    navBarMenu.classList.add("active")
    btnHambMenu.classList.add("absolute")
    toggleClose();
    showOrHideNavBarBodyOverlay(1);
  }
  else {
    navBarMenu.classList.remove("active");
    btnHambMenu.classList.remove("absolute")
    toggleOpen();
    showOrHideNavBarBodyOverlay(0);
  }
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    showOrHideNavBarBodyOverlay(0)
    navBarMenu.classList.remove("active");
    btnHambMenu.classList.remove("absolute")
    toggleOpen(0)
  });
});

document.onclick = function (e) { // Fecha o menu e o overlay se clicar fora do menu
  if (!navBarMenu.contains(e.target) && !e.target.hasAttribute('data-icon')) {
    showOrHideNavBarBodyOverlay(0);
    navBarMenu.classList.remove("active");
    btnHambMenu.classList.remove("absolute")
    showOrHideNavBarBodyOverlay(0);
    toggleOpen();
  }
};