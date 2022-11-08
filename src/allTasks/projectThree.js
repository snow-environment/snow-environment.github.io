import {render, html} from '../lib.js'
const projectThreeTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 3</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`



export async function projectThree(ctx) {

  ctx.render(projectThreeTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) =>
  {
 
    btn.classList.remove('clicked')
   
  })


  let currentClicked = allOptions[2];
  currentClicked.classList.add('clicked')
  }