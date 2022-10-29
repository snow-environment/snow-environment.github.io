
import { twoOne } from '../allTests/projectTwo/testOne.js';
import { twoThree } from '../allTests/projectTwo/testThree.js';
import { twoTwo } from '../allTests/projectTwo/testTwo.js';
import {render, html} from '../lib.js'
import { validation } from '../util/validate.js';

const projectTwoTemplate = () => html`

<section class="projectOne">
<h1 class="project-heading">Mini Project #2</h1>

<!-- // t1-->
<div class="task-wrapper">
  <h2>Task 1</h2>
  <div class="short-description">
    <p class="task-info">1. Open your ServiceNow Instance and create a new mid user:</p>
<ul class="requirements">
   <li class="req-for-task">Create a new user with UserID="snow_mid_user"</li>
   <li class="req-for-task">First name="Raymond", Last Name="Denton"</li>
   <li class="req-for-task">Assign "mid_server" role to the user</li>
   <li class="req-for-task">Check "Password needs reset" and press "Submit" button</li>
   <li class="req-for-task">Open the "snow_mid_user" record and set password for him. Save the password in a plain text in a separate file. Finally Press "Update"</li>
</ul>
  <p class="task-info">2. Verify snow_mid_user:</p>
<ul class="requirements">
  <li class="req-for-task">Log out as admin and login with the new user - "snow_mid_user"</li>
  <li class="req-for-task">Promp window will apear to change the password for the "snow_mid_user". In the Current Password field paste the password you have copied from the previous step</br>and then set a new more convinient password the the user by your choice. Remember the new password, you will need it in the further setup</li>
  <li class="req-for-task">Login again as a "admin"</li>
</ul>
  </div>
  <!--  -->


    <div class="button-wrapper">
    <button  class="validate-task-btn one">
        Validate
      </button>
      <p class="not-validated">Coming soon..</p>

    <p class="validated">Task is completed!</p>

      
</div>
</div>
<!-- // t 2 -->
<div class="task-wrapper">
<h2>Task 2</h2>
<div class="short-description">
<p class="task-info">1. Coming soon..</p>
<ul class="requirements">
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
</ul>
</div>
<!--  -->


<div class="button-wrapper">
<button  class="validate-task-btn two">
    Validate
  </button>
  <p class="not-validated">Coming soon..</p>

<p class="validated">Task is completed!</p>

  
</div>
</div>

<!-- // t3 -->
<div class="task-wrapper">
<h2>Task 3</h2>
<div class="short-description">
<p class="task-info">1. Coming soon..</p>
<ul class="requirements">
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
<li class="req-for-task">..</li>
</ul>
</div>
<!--  -->


<div class="button-wrapper">
<button  class="validate-task-btn three">
Validate
</button>
<p class="not-validated">Coming soon..</p>

<p class="validated">Task is completed!</p>


</div>
</div>

</section>
`


export async function projectTwo(ctx) {

    console.log('projectTwo')
  ctx.render(projectTwoTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
  console.log('before',allOptions)

  allOptions.forEach((btn) =>
  {
    console.log(btn)
    btn.classList.remove('clicked')
   
  })
// allWrappers[1] current project menu option.

  let currentClicked = allOptions[1];
  currentClicked.classList.add('clicked')


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
      let notValidated = eParent.querySelector('.not-validated')
      console.log('Not validated',notValidated.parentNode);
      // let notValidated = document.querySelector('.not-validated')
      notValidated.style.display = 'none'
      eTarget.disabled = true;
      eTarget.classList.add('no-hover')
      eTarget.classList.add('grey-me')

      let response = ''
      if (eTarget.classList.contains('one')) {
        response = await twoOne()
        console.log('BTN e 1')
  
      }
      if (eTarget.classList.contains('two')) {
        response = await twoTwo()
        
        console.log('BTN e 2')
  
      }
  
      // -----Activate when oneThree logic is ready!!!!------
      if (eTarget.classList.contains('three')) {
        response = await twoThree()
        console.log('BTN e 3')
  
      }
  
  validation(response,eTarget,notValidated)
  
  
  
  
  
    }
  }
  