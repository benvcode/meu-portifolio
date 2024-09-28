// components/depoiment/depoiment-card.js

console.log('Executing depoiment-card.js');

import style from '!!raw-loader!@css/style.css';
import styles from './depoiment-card.styles.scss';

class DepoimentCardComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    // Para evitar recriar o Shadow DOM várias vezes, especialmente para lidar com possíveis erros ao usar o Swiper
    if (!this.shadowRoot) {
      this.render();
    }
  }

  render() {

    const src = this.getAttribute('data-src');
    const title = this.getAttribute('data-title');
    const subtitle = this.getAttribute('data-subtitle');
    const text = this.getAttribute('data-text');
    const href = this.getAttribute('data-href');

    const shadow = this.attachShadow({ mode: 'open' }); // Criar Shadow DOM

    shadow.innerHTML = `
      <style>
        ${style}
        ${styles}
      </style>
      <div class="card">
        <div class="card-body">
          <div class="u-flex-center justify-content-start flex-wrap gap-2">
            <img
              src="${src}"
              class="rounded-circle"
              width="48px" height="48px">
            <div>
              <h5 class="card-title mb-1">${title}</h5>
              <p class="card-subtitle xsmall" style="color: var(--text-secondary);">
              ${subtitle}
              </p>
            </div>
          </div>

          <p class="card-text mt-1">
            ${text}
          </p>
          <a href="${href}" target="_blank" class="stretched-link"></a>
        </div>
      </div>
    `;
  }
}

export function registerDepoimentCardComponent() {
  customElements.define('depoiment-card', DepoimentCardComponent);
}
