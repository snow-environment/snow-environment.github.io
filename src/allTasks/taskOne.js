import {render, html} from '../lib.js'
import { verifyTask } from '../testOne.js';
const taskOneTemplate = () => html`

<section class="taskOne">
  <h2>Task Title</h2>
  <div class="short-description">
    <p>This task is part of MiniProject 2, the Number of the task is #1.
      In this task you the student have to create table in his own dev instance, the table must with exact name "Test_table_Miniproject_one"</p>
  </div>
  <button  class="validate-task-btn">
    Validate
  </button>
</section>
`


export async function tasksOnePage(ctx) {

    console.log('tasksOnePage')
  ctx.render(taskOneTemplate());
let validateBtn = document.querySelector('.validate-task-btn')
console.log(validateBtn)
validateBtn.addEventListener('click',onSubmit)
async function onSubmit(e){
  e.preventDefault()
  console.log('V A L I D A T E')
 let res = await verifyTask()
 console.log(res)
}
  }