import {render, html} from '../lib.js'
const projectSixTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 6</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`


export async function projectSix(ctx) {

    console.log('projectSix')
  ctx.render(projectSixTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
  console.log('before',allOptions)

  allOptions.forEach((btn) =>
  {
    console.log(btn)
    btn.classList.remove('clicked')
   
  })
// allWrappers[5] current project menu option.

  let currentClicked = allOptions[5];
  currentClicked.classList.add('clicked')
  }