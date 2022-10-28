import {render, html} from '../lib.js'
const projectFourTemplate = () => html`

<section class="taskOne">
  <h2>Project 4</h2>
  <div class="short-description">
    <p>Coming soon..
      </p>
  </div>


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