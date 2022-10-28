import {render, html} from '../lib.js'
const projectSixTemplate = () => html`

<section class="taskOne">
  <h2>Project 6</h2>
  <div class="short-description">
    <p>Coming soon..
      </p>
  </div>


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