import {render, html} from '../lib.js'
const projectTwoTemplate = () => html`

<section class="taskOne">
  <h2>Project 2</h2>
  <div class="short-description">
    <p>Coming soon.
      </p>
  </div>


</section>
`


export async function projectTwo(ctx) {

    console.log('projectTwo')
  ctx.render(projectTwoTemplate());


  }