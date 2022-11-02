import { oneOne } from '../allTests/projectOne/testOne.js';
import { oneThree } from '../allTests/projectOne/testThree.js';
import { oneTwo } from '../allTests/projectOne/testTwo.js';
import { localData } from '../app.js';
import { render, html } from '../lib.js'
import { completeCheck } from '../util/completeChecker.js';
import { validation } from '../util/validate.js';

const projectOneTemplate = () => html`
<section class="projectOne">

  <h1 class="project-heading">Mini Project #1</h1>
  <p class="project-agenda">In this project you will find hands on tasks for Certified System Administrator.</p>

  
  <div class="task-wrapper">
      <h2>Task 1</h2>
      <div class="short-description">
        <p class="task-info">1. Create a new user:</p
   <ul class="requirements">
       <li class="req-for-task">First Name: <span class="additional-info">John</span></li>
       <li class="req-for-task">Last Name: <span class="additional-info">Doe</span> </li>
       <li class="req-for-task">Email: <span class="additional-info">john.doe@example.com</span></li>
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
     <li class="req-for-task">Name = <span class="additional-info">ServiceNow MiniProject One</span></li>
     <li class="req-for-task">Manager = <span class="additional-info">Abel Tuter</span></li>
     <li class="req-for-task">Group Email = <span class="additional-info">snow.web.app@example.com</span></li>
     <li class="req-for-task">Description = <span class="additional-info">This is a test group for ServiceNow Task Verifier Web Application.</span></li>
</ul>

<p class="task-info">2. Assign the user <span class="additional-info">John Doe</span> to the <span class="additional-info">ServiceNow MiniProject One</span> and <span class="additional-info">Service Desk</span> group</p>
<p class="task-info">3. Grant the user <span class="additional-info">John Doe itil</span> role.</p>

    </div>
    <!--  -->
  
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
        <p class="task-info">1. Impersonate <span class="additional-info">ITIL User</span></p>

      </div>
      <!--  -->
      <div class="short-description">
          <p class="task-info">2. Navigate to <span class="additional-info">Application</span> --> <span class="additional-info">Incident</span> --> <span class="additional-info">Create New</span> and create new record with the following data:</p>
          <ul class="requirements">
            <li class="req-for-task">Caller = <span class="additional-info">ITIL User</span></li>
            <li class="req-for-task">Category = <span class="additional-info">Software</span></li>
            <li class="req-for-task">Subcategory = <span class="additional-info">Operating System </span></li>
            <li class="req-for-task">Configuration item = <span class="additional-info">container-storage-setup</span>  (find the CI in the search menu)</li>
            <li class="req-for-task">Short Description = <span class="additional-info">Network Connectivity Problem</span></li>
            <li class="req-for-task">Description = <span class="additional-info">Check Network Adapter Config Settings. Network is down since last update.</span></li>
            <li class="req-for-task">Channel = <span class="additional-info">Email</span></li>
            <li class="req-for-task">State = <span class="additional-info"> New</span></li>
            <li class="req-for-task">Impact = <span class="additional-info">High</span></li>
            <li class="req-for-task">Urgency = <span class="additional-info">1 - High</span></li>
            <li class="req-for-task">Priority = <span class="additional-info">1 - Critical</span></li>
            <li class="req-for-task">Assignment Group = <span class="additional-info">ServiceNow MiniProject One</span> </li>
            <li class="req-for-task">Assigned to = <span class="additional-info">John Doe</span></li>
          
        </ul>
        </div>
        <p class="task-info">After you finish with the above assignment press <span class="additional-info">Validate</span> button and check the result</p>
        <p class="task-info"> <span class="optional">!!OPTIONAL. Below's tasks will not affect the final result!!</span></p>
        <p class="task-info">3. Impersonate user <span class="additional-info">John Doe</span></p>
        <ul class="requirements">
          <li class="req-for-task">Navigate to <span class="additional-info">Incidents</span>, find and open the newly created Incident by ITIL User (use the filter to find the incident)</li>
          <li class="req-for-task">Optionally you can right click on the Navigation bar, click View and choose Default View to show all the fields</li>
          <li class="req-for-task">Go to <span class="additional-info">Resolution Information</span> tab, on Resolition code choose <span class="additional-info">Solution provided</span> and insert <span class="additional-info">ONBOOT=yes set for eth0 network adapter</span> in the Resolution notes field</li>
          <li class="req-for-task">Change the State on the incident to <span class="additional-info">Resolved</span></li>
          <li class="req-for-task">Click <span class="additional-info">Update</span> and End Impersonation</li>
        
      </ul>

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

  console.log(localData.p1)
  let projectTasks = localData.p1
  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')


  allOptions.forEach((btn) =>
  {
    
    btn.classList.remove('clicked')

  })
// allWrappers[0] current project menu option.

  let currentClicked = allOptions[0];
  currentClicked.classList.add('clicked')

 


  if (projectTasks.taskOne == true) {
    console.log('TASK 1 COMPLATED')
    let completeSection = allWrappers[0];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }
  if (projectTasks.taskTwo == true) {
    console.log('TASK 2 COMPLATED')
    let completeSection = allWrappers[1];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }
  if (projectTasks.taskThree == true) {
    console.log('TASK 3 COMPLATED')
    let completeSection = allWrappers[2];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }


  let btn = document.querySelector('.validate-task-btn')
  let validateButtons = document.querySelectorAll('.validate-task-btn').forEach(btn => {
    btn.addEventListener('click', onSubmit)
  });
  let mainContentEl = document.querySelector('.main-content')
  mainContentEl.style.overflow = 'auto'
  // validateBtn.addEventListener('click', onSubmit)
  async function onSubmit(e) {
    e.preventDefault()
    let eTarget = e.target;
    console.log('V A L I D A T E')

    console.log('e target > ', eTarget)
    console.log('parent', eTarget.parentNode)
    let eParent = eTarget.parentNode;
    let notValidated = eParent.querySelector('.not-validated')
    console.log('Not validated', notValidated.parentNode);

    notValidated.style.display = 'none'
    eTarget.disabled = true;
    eTarget.classList.add('no-hover')
    eTarget.classList.add('grey-me')
eTarget.textContent = 'Processing..'

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

    validation(response, eTarget, notValidated, 'p1')




    completeCheck(projectTasks,currentClicked)

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

// export function selected(e){
// console.log('in selected  > >>  >',e.target)
// e.target.classList.add('clicked')
// }