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


  }