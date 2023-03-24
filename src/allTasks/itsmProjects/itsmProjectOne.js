import { oneOne } from '../../allTests/ITSM_Projects/projectOne/testOne.js';
import { render, html } from '../../lib.js'
import { validation } from '../../util/validate.js';

const itsmProjectOneTemplate = () => html`

<section class="projectOne">
<h1 class="project-heading">Mini Project 1</h1>
  <p class="project-agenda">In this project you will find tasks for <span class="bold-me">ITSM</span>.</p>
  <div class="task-wrapper">
    <h2>Introduction</h2>
    <div class="short-description">
      
      <p class="project-intoduction">ACME as a global company wants to introduce a reward system for all ACME employees. This new offering allows employees from ACME to enjoy a leisure catalog from where they can freely acquire goods and services based on the reward points, they managed to collect throughout the year.</p>
      <p>This mini project consists of:</p>
  
  <ul class="requirements">
     <li class="req-for-task">Building a leisure catalog for various goods and services.</li>
     <li class="req-for-task">A reward system that allows employees to ramp up convertible points. The points can be acquired by either one of the cases bellow:</li>
    
     <li class="req-for-task">Quarterly quota of points that managers can distribute based on merits to team members.</li>
     <li class="req-for-task">Business trip (miles system conversion to points)</li>
     <li class="req-for-task">Overtime reward system.</li>
     <li class="req-for-task">Leisure Employee center or portal allowing ACME employees to browse catalogs and convert their reward points.</li>
     <p>Notes: </p>
     <li class="req-for-task">The use case should be implemented in a Rome release.</li>
     <li class="req-for-task">All the functionalities listed above do not exist by default in a fresh instance and are part of the project to implement.</li>
     <li class="req-for-task">This document is a functional representation of the user experience that ACME wants to provide to its employees. It’s up to you to complement the implementation with needed master data such as groups if missing, or other supporting data that will make this use case work.</span></li>
  
  
  
  </ul>
  
  
  
    </div>
    <!--  -->
  
  </div>
  
  
  
  </div>
    
        
    
         
    </div>
    <div class="task-wrapper">
    <h2>1.Leisure Catalog</h2>
    <div class="short-description">
      <p class="task-info">1.1 Building the catalog</p>
  <ul class="requirements">
     <li class="req-for-task">The leisure catalog is a catalog grouping goods and services where items can be purchased converting points. For simplicity 100 points will be converted to 1 Euro
      The Leisure catalog is organized using categories and sub-categories to make browsing the catalog convenient for end users. 
      </li>
    
  </ul>
    </div>
    <!--  -->
    
  
    
  </div>
  
  <div class="task-wrapper">
  
  <div class="short-description">
    <p class="task-info">1.1.1	The categories and sub-categories are:</p>
  <ul class="requirements">
  <li class="req-for-task"<span class="additional-info">Choose up to 4 categories from https://www.worldshop.eu/en/?p=hqjA-PBI9oo</span></li>
  <li class="req-for-task"<span class="additional-info">Choose up to 3 and not less than 2 sub-categories from the selected categories of your preference.</span></li>
  </ul>
  <p class="note">Note: Complement the creation of the categories with icon to give a good shopping experience.</p>
  </div>
  <!--  -->
  
  
  
  </div>
  
  <!-- 1.1.2 -->
  <div class="task-wrapper">
  
    <div class="short-description">
      <p class="task-info">1.1.2 Catalog items</p>
    <ul class="requirements">
    <li class="req-for-task"<span class="additional-info">For each selected sub-category, select 2 items of your preference and add them to the Leisure catalog as items with descriptions, price and photo.</span></li>
    
    </ul>
  
    </div>
    <!--  -->
    
    
    
    </div>
  
    <!-- 1.1.3 -->
    <div class="task-wrapper">
    
      <div class="short-description">
        <p class="task-info">1.1.3 Fulfillment</p>
      <ul class="requirements">
      <li class="req-for-task" <span class="additional-info">For simplicity all items share the same fulfilment plan. All items are delivered by one team.</span></li>
      
      </ul>
    
      <p class="task-info">A requested item has 3 stages:</p>
      <ul class="requirements">
      <li class="req-for-task" <span class="additional-info"></span>Submitted (when the request is created and automatically assigned to the Leisure team)</li>
      <li class="req-for-task" <span class="additional-info"></span>Preparation (when the requested item has an assignee)</li>
      <li class="req-for-task" <span class="additional-info"></span>Shipped (when the agent completes the shipping task)</li>
      <li class="req-for-task" <span class="additional-info"></span>Completed.</li>
      
      </ul>
      
      </div>
      </div>
      <!-- 1.1.4 -->
  <div class="task-wrapper">
  
    <div class="short-description">
      <p class="task-info">1.1.4.	Restrictions</p>
    <ul class="requirements">
    <li class="req-for-task"<span class="additional-info">Each employee can shop any item as long as there are enough points to convert for the ordered cart.</span></li>
    
    </ul>
  
    </div>
  
 
    </div>
 
  


  <div class="task-wrapper">
  <!-- 1.2 -->
    <div class="short-description">
      <p class="task-info">1.2	Consuming the catalog</p>
    <ul class="requirements">
    <li class="req-for-task"<span class="additional-info">ACME wants to provide a separate portal or employee center for employees to have. A new portal should be provided with the catalog attached to it.</span></li>
    
    </ul>
    <div class="button-wrapper">
      <button  class="validate-task-btn one">
          Validate
        </button>
        <p class="not-validated">Requirements are not complete!</p>
        <p class="validated">Task is completed!</p>
   
    </div>
    
  </div>
      </section>
`



export async function itsmProjectOne(ctx) {

  ctx.render(itsmProjectOneTemplate());

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')

  allOptions.forEach((btn) => {

    btn.classList.remove('clicked')

  })
  let currentClicked = allOptions[2];
  console.log('current clicked >',currentClicked)
  currentClicked.classList.add('clicked')
  
let taskWrappers = document.querySelectorAll('.task-wrapper')
for (let index = 0; index < taskWrappers.length - 1; index++) {
  taskWrappers[index].style.borderBottom ='none'
  
}
let validateButtons = document.querySelectorAll('.validate-task-btn')
console.log(validateButtons)

validateButtons.forEach(btn => {
  btn.addEventListener('click', onSubmit)
});

  async function onSubmit(e) {
    e.preventDefault()
    console.log('clicked')
    let eTarget = e.target;
    console.log(eTarget)
    let eParent = eTarget.parentNode;
    let notValidated = eParent.querySelector('.not-validated')
console.log(notValidated)
    notValidated.style.display = 'none'
    eTarget.disabled = true;
    eTarget.classList.add('no-hover')
    eTarget.classList.add('grey-me')
eTarget.textContent = 'Processing..'

    let response = ''
    if (eTarget.classList.contains('one')) {
      response = await oneOne()
   
 console.log('contains one')

    }
    validation(response, eTarget, notValidated, 'p1')


    






//     // completeCheck(projectTasks,currentClicked)

//   }
}
}
//todo
// test oneOne returning true.