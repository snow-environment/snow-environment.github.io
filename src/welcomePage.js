
import {render, html} from './lib.js'
const welcomePageTemplate = () => html`
<section class="taskOne">
  <h1 class="welcome-heading">Welcome, Do it Wisers! :)</h1>
  <div class="before-you-start">
    <p class="before-info">Coming soon..</p>
    <img src="/img/comingSoon.png" alt="">
  </div>

  
      </section>
`


export async function welcomePage(ctx) {
  let mainContentEl = document.getElementById('main-a')
  mainContentEl.style.background ='#e2eff2'
mainContentEl.classList.remove('login-view')
// mainContentEl.style.overflow ='auto'
    console.log(mainContentEl)
  ctx.render(welcomePageTemplate());
  let contentEl = document.querySelector('.content')
  let menu = document.querySelector('.menu')

  contentEl.style.background ='white';
  contentEl.style.width ='100%';
  contentEl.style.height ='100%';
  contentEl.style.display ='-webkit-box';
  contentEl.style.display ='-ms-flexbox';
  contentEl.style.display ='flex';
  contentEl.style.height = '95vh'
  menu.style.display='flex'



  mainContentEl.style.display ='block'
 let logOut = document.querySelector('.logout').style.display = 'block'
//  let allWrappers = document.querySelectorAll('.task-wrapper')
//  console.log('all >',allWrappers)
 let allOptions = document.querySelectorAll('.options')
 allOptions.forEach((btn) =>
  {
    // btn.addEventListener('click',selected)
    btn.classList.remove('clicked')

  })

  }