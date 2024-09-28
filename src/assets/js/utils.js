// utils.js

console.log("Executando utils.js");

// Corrige o problema de Flash de Conteúdo Não Estilizado (FOUC)
window.onload = function () {
  document.body.style.visibility = `visible`;
  // é necessário adicionar 'style="visibility:hidden"' ao 'body'
};

// Ajusta a largura de um elemento preenchendo toda a largura da tela
function breakoutSetFullWidth() {
  const body = document.querySelector('body'),
    bodywidth = body.clientWidth,
    breakoutElements = document.querySelectorAll('.u-full-width');

  breakoutElements.forEach(function (element) {
    element.setAttribute('style', 'width:' + bodywidth + 'px; ');
  });
}
window.addEventListener('load', breakoutSetFullWidth);
window.addEventListener('resize', breakoutSetFullWidth);