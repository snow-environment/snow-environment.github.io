import {render, html} from '../lib.js'
const projectSixTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 6</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`


export async function projectSix(ctx) {

  ctx.render(projectSixTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) =>
  {
    btn.classList.remove('clicked')
   
  })

  let currentClicked = allOptions[5];
  currentClicked.classList.add('clicked')
  }