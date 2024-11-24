import { Viewer } from '../lib/main';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="turn">Test</div>
  <div id="slider"></div>
`;

const turnBook = new Viewer('#turn', { type: 'pdf', src: '../assets/pamphlet_mobile.pdf' });

turnBook.mount();

document.querySelector('#previous')?.addEventListener('click', () => turnBook.previous());
document.querySelector('#next')?.addEventListener('click', () => turnBook.next());

const turn = document.getElementById('turn');

if (turn) {
  turn.addEventListener('click', (event) => {
    const rect = turn.getBoundingClientRect();
    const x = event.clientX - rect.left;

    if (x > rect.width / 2) {
      turnBook.next();
    } else if (x < rect.width / 2) {
      turnBook.previous();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      turnBook.next();
    } else if (event.key === 'ArrowLeft') {
      turnBook.previous();
    }
  });

}