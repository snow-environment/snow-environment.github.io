import {render, html} from '../lib.js'
const projectFourTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 4</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`



export async function projectFour(ctx) {

    console.log('projectFour')
  ctx.render(projectFourTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
  console.log('before',allOptions)

  allOptions.forEach((btn) =>
  {
    console.log(btn)
    btn.classList.remove('clicked')
   
  })
// allWrappers[3] current project menu option.

  let currentClicked = allOptions[3];
  currentClicked.classList.add('clicked')
  }