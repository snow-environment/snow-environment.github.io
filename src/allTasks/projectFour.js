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


  }