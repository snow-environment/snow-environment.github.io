import {render, html} from '../lib.js'
const projectThreeTemplate = () => html`

<section class="taskOne">
  <h2>Project 3</h2>
  <div class="short-description">
    <p>Coming soon..
      </p>
  </div>


</section>
`



export async function projectThree(ctx) {

    console.log('projectThree')
  ctx.render(projectThreeTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
  console.log('before',allOptions)

  allOptions.forEach((btn) =>
  {
    console.log(btn)
    btn.classList.remove('clicked')
   
  })
// allWrappers[2] current project menu option.

  let currentClicked = allOptions[2];
  currentClicked.classList.add('clicked')
  }