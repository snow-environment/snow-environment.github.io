
import { twoOne } from '../allTests/projectTwo/testOne.js';
import { twoThree } from '../allTests/projectTwo/testThree.js';
import { twoTwo } from '../allTests/projectTwo/testTwo.js';
import {render, html} from '../lib.js'
import { validation } from '../validate.js';

const projectTwoTemplate = () => html`

<section class="projectOne">
<h1 class="project-heading">Mini Project #2</h1>

<!-- // t1-->
<div class="task-wrapper">
  <h2>Task 1</h2>
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

  // let allWrappers = document.querySelectorAll('.task-wrapper')
  // console.log('all >',allWrappers)
  // console.log('1 >',allWrappers[0])
  // console.log('2 >',allWrappers[1])
  // console.log('3 >',allWrappers[2])
  // let allOptions = document.querySelectorAll('.options')
  // console.log('before',allOptions)

  // allOptions.forEach((btn) =>
  // {
  //   console.log(btn)
  //   btn.classList.remove('clicked')
   
  // })
  // console.log('after',allOptions)
  // let currentClicked = allOptions[1];
  // currentClicked.classList.add('clicked')


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
        response = await twoTwo()
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
  