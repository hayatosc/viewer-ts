import { Viewer } from '../lib/main';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="turn">Test</div>
  <div class="test">
    <button id="previous">Previous</button>
    <button id="next">Next</button>
  </div>
  <style>
    @import url('https://unpkg.com/sanitize.css');
    #app {
      width: 100dvw;
      height: 100dvh;
      padding-block: 1rem;
    }
    #turn {
      height: 90%;
    }
  </style>
`;

const turnBook = new Viewer('#turn', { type: 'pdf', src: '../assets/14.pdf' });

turnBook.mount();

document.querySelector('#previous')?.addEventListener('click', () => turnBook.previous());
document.querySelector('#next')?.addEventListener('click', () => turnBook.next());
