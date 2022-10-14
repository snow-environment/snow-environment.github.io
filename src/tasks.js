import {render, html} from './lib.js'
const tasksTemplate = () => html`

`


export async function tasksPage(ctx) {

    console.log('tasksPage')
  ctx.render(tasksTemplate());
  let contentEl = document.querySelector('.content')
  let menu = document.querySelector('.menu')
  console.log(contentEl)
  contentEl.style.background ='white';
  contentEl.style.width ='100%';
  contentEl.style.height ='100%';
  contentEl.style.display ='-webkit-box';
  contentEl.style.display ='-ms-flexbox';
  contentEl.style.display ='flex';
  menu.style.display='flex'

  }