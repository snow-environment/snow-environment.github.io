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


  }