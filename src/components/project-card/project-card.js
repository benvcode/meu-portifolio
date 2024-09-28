// components/project/project-card.js

console.log('Executing project-card.js');

import style from '!!raw-loader!@css/style.css';
import styles from './project-card.styles.scss';

class ProjectCardComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('data-title');
    const text = this.getAttribute('data-text');
    const text2 = this.getAttribute('data-text2');
    const href = this.getAttribute('data-href');
    const technologies = this.getAttribute('data-technologies').split(',').map(tech => tech.trim());

    const shadow = this.attachShadow({ mode: 'open' }); // Criar Shadow DOM

    shadow.innerHTML = `
      <style>
        ${style + styles}
      </style>
      <div class="card position-relative">
          <div class="card-body text-body">
            <h4 class="card-title">${title}</h4>
            <p class="card-text text-body-secondary">${text}</p>
              ${text2 !== null ? `<p class="card-text card-text2 small">${text2}.</p>` : ''}
            <ul class="card__list d-flex flex-wrap gap-1 mt-3">
              ${technologies.map(tech => `<li class="card__item xsmall">${tech}</li>`).join('')}
            </ul>
            <p class="mt-2 small card-github"><i class="icon roudend-full fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;Github</p>
              <a href="${href}" class="stretched-link"></a>
          </div>
      </div>
    `;
  }
}

export function registerProjectCardComponent() {
  customElements.define('project-card', ProjectCardComponent);
}