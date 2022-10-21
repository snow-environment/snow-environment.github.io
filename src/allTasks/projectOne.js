import { oneOne } from '../allTests/projectOne/testOne.js';
import { oneThree } from '../allTests/projectOne/testThree.js';
import { oneTwo } from '../allTests/projectOne/testTwo.js';
import { render, html } from '../lib.js'
import { validation } from '../validate.js';

const projectOneTemplate = () => html`
<section class="taskOne">

  <h1 class="project-heading">Mini Project #1</h1>
 
  
  <div class="task-wrapper">
      <h2>Task 1</h2>
      <div class="short-description">
        <p class="task-info">1. Create a new user:</p>
   <ul class="requirements">
       <li class="req-for-task">First Name: "John"</li>
       <li class="req-for-task">Last Name: "Doe"</li>
       <li class="req-for-task">Email: "john.doe@example.com"</li>
       <li class="req-for-task">Leave all the rest fields by default</li>
   </ul>
      </div>
      <!--  -->

  
        <div class="button-wrapper">
        <button  class="validate-task-btn one">
            Validate
          </button>
          <p class="not-validated">Requirements are not complete!</p>
        <p class="validated">Task is completed!</p>

          
    </div>
  </div>
  <div class="task-wrapper">
    <h2>Task 2</h2>
    <div class="short-description">
      <p class="task-info">1. Create a new group:</p>
 <ul class="requirements">
     <li class="req-for-task">Name = "ServiceNow MiniProject One"</li>
     <li class="req-for-task">Manager = "Abel Hunter"</li>
     <li class="req-for-task">Group Email = "snow.web.app@example.com"</li>
     <li class="req-for-task">Description = "This is a test group for ServiceNow Task Verifier Web Application."</li>
</ul>

<p class="task-info">Assign the user "John Doe" to the "ServiceNow MiniProject One" and "Service Desk" group</p>
<p class="task-info">Grant the user "John Doe" "itil" role.</p>

    </div>
    <!--  -->
    <div class="short-description">
        <p class="task-info" >2. In the newly created table, create a new record:</p>
   <ul class="requirements">
       <li class="req-for-task">'Description' = 'Test Task 1'</li>
       <li class="req-for-task">'Short Description' = 'Test 1'</li>
       <li class="req-for-task">'Created by' = 'admin' (by default)</li>
       <li class="req-for-task">'Assigned to' = 'Jason Roy'(choose user from the choice menu)</li>
       <li class="req-for-task">'Created' = Current date and time</li>
   </ul>
      </div>
      <div class="button-wrapper">
      <button  class="validate-task-btn two">
          Validate
        </button>
        <p class="not-validated">Requirements are not complete!</p>
        <p class="validated">Task is completed!</p>

  </div>
</div>

  <div class="task-wrapper">
      <h2>Task 3</h2>
      <div class="short-description">
        <p class="task-info">1. Create a new discovery schedule:</p>
   <ul class="requirements">
       <li class="req-for-task">Set "Name" to "Test Schedule"</li>
       <li class="req-for-task">Set "Discover" to "Configuration items"</li>
       <li class="req-for-task">Set "Run" to "Weekly"</li>
       <li class="req-for-task">Set "Day of the week" as "Monday"</li>
   </ul>
      </div>
      <!--  -->
      <div class="short-description">
          <p class="task-info">2. Create a new IP range:</p>
     <ul class="requirements">
         <li class="req-for-task">Set "Name" to "Test IP Range"</li>
         <li class="req-for-task">'Short Description' = 'Test 1'</li>
         <li class="req-for-task">Set the newly created IP range to "Test Schedule" Discovery Schedule</li>
         <li class="req-for-task">Set "Start IP Address" to "192.168.0.1"</li>
         <li class="req-for-task">Set "End IP Address" to "192.168.0.100"</li>
     </ul>
        </div>
        <div class="button-wrapper">
        <button  class="validate-task-btn three">
            Validate
          </button>
          <p class="not-validated">Requirements are not complete!</p>
          <p class="validated">Task is completed!</p>
    </div>
  </div>
    </section>

`


export async function projectOne(ctx) {

  console.log('projectOne')
  ctx.render(projectOneTemplate());
  // let validateBtn = document.querySelector('.validate-task-btn')
  let btn = document.querySelector('.validate-task-btn')
let validateButtons = document.querySelectorAll('.validate-task-btn').forEach(btn => {
  btn.addEventListener('click', onSubmit)
});

  // validateBtn.addEventListener('click', onSubmit)
  async function onSubmit(e) {
    e.preventDefault()
    let eTarget = e.target;
    console.log('V A L I D A T E')
    //change logic with e target
    console.log('e target > ',eTarget)
    console.log('parent',eTarget.parentNode)
    let eParent = eTarget.parentNode;
    let notValidated =eParent.querySelector('.not-validated')
    console.log('Not validated',notValidated);
    // let notValidated = document.querySelector('.not-validated')
    notValidated.style.display = 'none'
    eTarget.disabled = true;
    eTarget.classList.add('no-hover')
    eTarget.classList.add('grey-me')
//     btn.disabled = true;
// console.log('notValidated >>>>>>>>>>>>>>',notValidated)
//     btn.classList.add('no-hover')
//     btn.classList.add('grey-me')
    let response = ''
    if (eTarget.classList.contains('one')) {
      response = await oneOne()
      console.log('BTN e 1')

    }
    if (eTarget.classList.contains('two')) {
      response = await oneTwo()
      
      console.log('BTN e 2')

    }

    // -----Activate when oneThree logic is ready!!!!------
    if (eTarget.classList.contains('three')) {
      response = await oneThree()
      console.log('BTN e 3')

    }

validation(response,eTarget,notValidated)





  }
}
// function validation(response,btn,notValidated){

//   if (response) {
//     btn.style.display = 'none'
//     document.querySelector('.validated').style.display = 'block'
//   }
//   else {
//     btn.disabled = false;
//     btn.classList.remove('no-hover')
//     btn.classList.remove('grey-me')

//     notValidated.style.display = 'block'


//   }
// }