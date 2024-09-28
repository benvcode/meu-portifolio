console.log('Executando main.js');

import "./assets/js/swiper.js";
import './assets/css/style.css'; // 'style-loader' injetará o CSS no DOM, criando uma <style> tag no <head> do HTML.

import "./assets/js/utils.js";
//import "./assets/js/scroll.js";
import "./assets/js/theme.js";
import "./assets/js/menu.js";

// Importar e Register components
import { registerProjectCardComponent } from "./components/project-card/project-card.js";
import { registerDepoimentCardComponent } from "./components/depoiments/depoiment-card.js";

registerProjectCardComponent();
registerDepoimentCardComponent();
