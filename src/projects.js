import {render, html} from './lib.js'
const tasksTemplate = () => html`
<section class="taskOne">
  <h1 class="project-heading">Welcome, Do it Wisers! :)</h1>
  <div class="before-you-start">
    <p class="before-info">Coming soon..</p>
    <img src="/img/comingSoon.png" alt="">
  </div>

  
      </section>
`


export async function tasksPage(ctx) {
  let mainContentEl = document.getElementById('main-a')
  mainContentEl.style.background ='#e2eff2'
    console.log(mainContentEl)
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
  contentEl.style.height = '94vh'
  menu.style.display='flex'
 let logOut = document.querySelector('.logout').style.display = 'block'

 console.log(logOut)

  }