console.log("Executando theme.js");

const btnThemeToogleTheme = document.querySelector('[data-btn="theme-toggle"]'),
  prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Aplica o tema e salvar no localStorage
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
}

// Alterna entre os temas 'light' e 'dark'
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Verifica a preferência de tema ao carregar a página
function checkInitialTheme() {
  // Obter o tema do localStorage
  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    if (prefersDarkScheme.matches) {
      //console.log("checkInitialTheme.(): dark");
      applyTheme('dark');
    }
    else {
      //console.log("checkInitialTheme.(): light");
      applyTheme('light');
    }
  }
  else {
    //console.log(`checkInitialTheme.(): localStorage: ${savedTheme}`);
    applyTheme(savedTheme);
  }
}

checkInitialTheme();

// Eventos
//

btnThemeToogleTheme.onclick = function () {
  console.log("theme.btnThemeToogle()");
  switchTheme();
};
