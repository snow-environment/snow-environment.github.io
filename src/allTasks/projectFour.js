import {render, html} from '../lib.js'
const projectFourTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 4</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`



export async function projectFour(ctx) {

  ctx.render(projectFourTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) =>
  {
    btn.classList.remove('clicked')
   
  })


  let currentClicked = allOptions[3];
  currentClicked.classList.add('clicked')
  }