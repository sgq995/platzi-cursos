import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

/**
 *
 * @param {keyof HTMLElementTagNameMap} tag
 * @param {Record<string, any>} props
 * @param {HTMLElement | HTMLElement[] | string} children
 */
function html(tag, props, children) {
  const element = document.createElement(tag);

  if (typeof props === 'object') {
    const names = Object.keys(props);

    const attributes = names.filter((name) => !name.startsWith('on'));
    attributes.forEach((name) => element.setAttribute(name, props[name]));

    const listeners = names.filter((name) => name.startsWith('on'));
    listeners.forEach((name) => element.addEventListener(name, props[name]));
  }

  if (Array.isArray(children)) {
    children.forEach((child) => element.appendChild(child));
  } else if (children instanceof HTMLElement) {
    element.appendChild(children);
  } else if (typeof children === 'string') {
    element.textContent = children;
  }

  return element;
}

const app = document.querySelector('#app');

app.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

app.appendChild(
  html('div', undefined, [
    html(
      'a',
      { href: 'https://vitejs.dev', target: '_blank' },
      html('img', { src: '/vite.svg', class: 'logo', alt: 'Vite logo' })
    ),
    html(
      'a',
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        target: '_blank',
      },
      html('img', {
        src: javascriptLogo,
        class: 'logo vanilla',
        alt: 'Javascript logo',
      })
    ),
    html('h1', undefined, 'Hello world'),
    html(
      'div',
      { class: 'card' },
      html('button', { id: 'counter', type: 'button' })
    ),
    html(
      'p',
      { class: 'read-the-docs' },
      'Click on the Vite logo to learn more'
    ),
  ])
);

setupCounter(document.querySelector('#counter'));
