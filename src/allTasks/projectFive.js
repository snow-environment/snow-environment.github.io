import {render, html} from '../lib.js'
const projectFiveTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 5</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`



export async function projectFive(ctx) {

  ctx.render(projectFiveTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) =>
  {
    btn.classList.remove('clicked')
   
  })

  let currentClicked = allOptions[4];
  currentClicked.classList.add('clicked')
  }