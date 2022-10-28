import {render, html} from '../lib.js'
const projectFiveTemplate = () => html`

<section class="taskOne">
  <h2>Project 5</h2>
  <div class="short-description">
    <p>Coming soon..
      </p>
  </div>


</section>
`


export async function projectFive(ctx) {

    console.log('projectFive')
  ctx.render(projectFiveTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
  console.log('before',allOptions)

  allOptions.forEach((btn) =>
  {
    console.log(btn)
    btn.classList.remove('clicked')
   
  })
// allWrappers[4] current project menu option.

  let currentClicked = allOptions[4];
  currentClicked.classList.add('clicked')
  }