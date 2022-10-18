import {render, html} from './lib.js'
const tasksTemplate = () => html`
<section class="taskOne">
  <h1 class="project-heading">Mini Project #1</h1>
  <div class="task-wrapper">
      <h2>Task 1</h2>
      <div class="short-description">
        <p class="task-info">1. Create a custom table with label 'Project Verify' and name 'u_project_verify':</p>
   <ul class="requirements">
       <li class="req-for-task">create a custom field with column label 'Description' and column name 'u_description'. Field type 'String' with max lenght 100</li>
       <li class="req-for-task">create a custom field with column label 'Short Description' and column name 'u_short_description'. Field type 'String' with max lenght 20</li>
       <li class="req-for-task">create a custom field with column label 'Assigned to' and column name 'u_assigned_to'. Field type 'List'. Set the reference of the field to 'sys_user' table</li>
       <li class="req-for-task">(Optional) modify the default field layout(or create a new layout) to display only the following fields --> 'Description', 'Short Description', 'Assigned to','Created by' and 'Created'(last two fields are existing by default)</li>
   </ul>
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
        <button  class="validate-task-btn">
            Validate
          </button>
          <p class="not-validated">Please make sure you complete all requirements!</p>
          <p class="validated">Task is completed!</p>

    </div>
  </div>
  
  <div class="task-wrapper">
      <h2>Task 2</h2>
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
      <div class="short-description">
          <p class="task-info">2. Create a new group with name "Test Group":</p>
     <ul class="requirements">
         <li class="req-for-task">you can type in "Description" field anything by your choice</li>
         <li class="req-for-task">'Short Description' = 'Test 1'</li>
       
     </ul>
        </div>
        <div class="short-description">
          <p class="task-info">Make the newly created user "John Doe" member of the group "Test Group":</p>

        </div>
        <div class="button-wrapper">
        <button  class="validate-task-btn">
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
        <button  class="validate-task-btn">
            Validate
          </button>
          <p class="not-validated">Requirements are not complete!</p>
          <p class="validated">Task is completed!</p>
    </div>
  </div>
    </section>
`


export async function tasksPage(ctx) {
  let mainContentEl = document.getElementById('main-a')
  mainContentEl.style.background ='#e2eff2'
    console.log(mainContentEl)
  ctx.render(tasksTemplate());
  let contentEl = document.querySelector('.content')
  let menu = document.querySelector('.menu')
  console.log(contentEl)
  contentEl.style.background ='white';
  contentEl.style.width ='100%';
  contentEl.style.height ='100%';
  contentEl.style.display ='-webkit-box';
  contentEl.style.display ='-ms-flexbox';
  contentEl.style.display ='flex';
  contentEl.style.height = '94vh'
  menu.style.display='flex'
 let logOut = document.querySelector('.logout').style.display = 'block'

 console.log(logOut)

  }