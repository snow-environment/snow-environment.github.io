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


  }