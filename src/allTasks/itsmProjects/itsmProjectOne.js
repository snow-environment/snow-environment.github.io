import {render, html} from '../../lib.js'
const itsmProjectOneTemplate = () => html`

<section class="projectOne">

<h1 class="project-heading">Mini Project 1</h1>
<p class="project-agenda">Project coming soon</p>
</section>
`



export async function itsmProjectOne(ctx) {

  ctx.render(itsmProjectOneTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) =>
  {
 
    btn.classList.remove('clicked')
   
  })

  console.log(allOptions)

  let currentClicked = allOptions[0];
  currentClicked.classList.add('clicked')
  console.log(currentClicked)
  }