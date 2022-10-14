import {render, html} from '../lib.js'
const taskTwoTemplate = () => html`

<section class="taskOne">
  <h2>Task Title</h2>
  <div class="short-description">
    <p>This task is part of MiniProject 2, the Number of the task is #2.
      In this task you the student have to create table in his own dev instance, the table must with exact name "Test_table_Miniproject_one"</p>
  </div>
  <button class="validate-task-btn">
    Validate
  </button>
</section>
`


export async function tasksTwoPage(ctx) {

    console.log('tasksOnePage')
  ctx.render(taskTwoTemplate());


  }