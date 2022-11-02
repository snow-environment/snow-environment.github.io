
import { credentials } from './app.js'
import { render, html } from './lib.js'
const welcomePageTemplate = () => html`
<section class="projectOne">
<h1 class="welcome-heading">Welcome, Do it Wisers! :)</h1>
<div class="before-you-start">
<p class="before-info">
Before you try to validate tasks in some of projects, first you need to create Cors Rule in the instance you are connected.
</p>
<div class="short-description">
<ul class="all-steps">
<li class="steps"><img src="./img/corsRule1.JPG" alt="" class="step-img"></li>

<li class="steps"><img src="./img/createNewCors.JPG" alt="" class="step-img"></li>
<li class="steps"><img src="./img/newCorsRule.JPG" alt="" class="step-img"></li>
</ul>
</div>
</div>
</section>
`


export async function welcomePage(ctx) {
  let mainContentEl = document.getElementById('main-a')
  mainContentEl.style.background = '#e2eff2'
  mainContentEl.classList.remove('login-view')
  mainContentEl.style.overflow = 'auto';

  console.log(mainContentEl)
  ctx.render(welcomePageTemplate());
  let contentEl = document.querySelector('.content')
  let menu = document.querySelector('.menu')
  let currentInstance = document.querySelector('.currentInstance').innerHTML = `Current instance: <span class="color-instance">${credentials.instName}</span>`
  contentEl.style.background = 'white';
  contentEl.style.width = '100%';
  contentEl.style.height = '100%';
  contentEl.style.display = '-webkit-box';
  contentEl.style.display = '-ms-flexbox';
  contentEl.style.display = 'flex';
  contentEl.style.height = '95vh'

  menu.style.display = 'flex'



  mainContentEl.style.display = 'block'
  let logOut = document.querySelector('.logout').style.display = 'block'
  //  let allWrappers = document.querySelectorAll('.task-wrapper')
  //  console.log('all >',allWrappers)
  let allOptions = document.querySelectorAll('.options')
  allOptions.forEach((btn) => {
    // btn.addEventListener('click',selected)
    btn.classList.remove('clicked')

  })

}