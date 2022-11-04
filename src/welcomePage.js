
import { credentials } from './app.js'
import { render, html } from './lib.js'
const welcomePageTemplate = () => html`
<section class="welcome-page">
  <h1 class="welcome-heading">Welcome, Do it Wisers! :)</h1>
  <div class="before-you-start">
  <div class="before-wrapper">
  <p class="before-info">
    ServiceNow Task Verifier is a web application giving the possibility to exercise and train with pre-made
    assignements on a ServiceNow Developer Instance and check the tasks. Every user can login with it's ServiceNow
    Instance credentials and verify the tasks in the application. Every tasks consists a JS script which verifies the
    CMDB and checks if specific tables, fields or records are existing.
    The Web Application is running JS scripts to check for the specific tables or records that you have create on your
    Developer Instance, following the assegnements. The scripts connects to your instance using a API and pre-made
    queries to the CMDB are used to extract the values from the tables/records.
  </p>
</div>
    <div class="short-description">
      <h3>Build with 🔧</h3>
      <div class="tech-stack">
        <!-- <p class="all-tech">Technologies:</p> -->
        <div class="tech-wrapper">
          <img class="tech-img border-me" src="./img/js.png" alt="" > <img class="tech-img border-me" src="./img/html.png" alt="" ><img class="tech-img border-me" src="./img/css.png" alt=""><img class="tech-img" src="./img/ruby.png" alt="" >
        </div>
      </div>
      <!-- <li class="technologies img-icons"> <img src="./img/js.png" alt="" width="30px" height="30px"> <img src="./img/html.png" alt="" width="30px" height="30px"><img src="./img/ruby.png" alt="" width="30px" height="30px" ><img src="./img/css.png" alt="" width="30px" height="30px"></li>
        <li class="technologies"><a target="_blank" href="https://developer.servicenow.com/dev.do#!/">ServiceNow Developer Portal</a></li> -->

      <li class="technologies"><a class="redirections" href="https://developer.servicenow.com/dev.do#!/"
          target="_blank">ServiceNow Developer Portal</a></li>
      <li class="technologies"><a class="redirections"
          href="https://www.npmjs.com/package/servicenow-rest-api?activeTab=readme" target="_blank">ServiceNow REST
          API</a></li>
      <li class="technologies"><a class="redirections" href="https://www.virtualbox.org" target="_blank">Oracle VM
          Virtual Box</a></li>

      <li class="technologies"><a class="redirections" href="https://obsidian.md/" target="_blank">Obsidian</a></li>
      <li class="technologies"><a class="redirections" href="https://www.vagrantup.com" target="_blank">Vagrant</a></li>
      <span class="additional-info"></span>
      <div class="short-description">
        <h3>Usage ❓</h3>
        <p class="before-you-start">⚠️ Before logging in the platform you should create a CORS rule in your ServiceNow
          Instance. Navigate to <span class="additional-info">Applications</span> <span class="arrow">&rarr;</span> <span
            class="additional-info">System Web Services</span> <span class="arrow">&rarr;</span> <span class="additional-info">REST</span> <span class="arrow">&rarr;</span> <span
            class="additional-info">CORS Rules</span>. Create a new rule with the following data:</p>
        <li class="cors-instructions">Name <span class="arrow">&rarr;</span> Give it a name by your choose.</li>
        <li class="cors-instructions">REST API <span class="arrow">&rarr;</span> Choose <span class="additional-info">Table API[now/table]</span> from
          the dropdown menu.</li>
        <li class="cors-instructions">Domain <span class="arrow">&rarr;</span> Insert the domain of the Web App <span
            class="additional-info">https://snow-environment.github.io</span></li>
        <li class="cors-instructions">Max age <span class="arrow">&rarr;</span> Leave as <span class="additional-info">0</span></li>
        <li class="cors-instructions">Application <span class="arrow">&rarr;</span> Global, by <span class="additional-info">default</span</li>
        <li class="cors-instructions">HTTP Methods <span class="arrow">&rarr;</span> Leave GET and POST as set by <span
            class="additional-info">default</span</li>
            <div class="steps-wrapper">
            <p class="cors-steps">Steps example:</p>
              <a class="cors-steps-img" href="/img/1.JPG" target="_blank">1</a>
              <a class="cors-steps-img" href="/img/2.JPG" target="_blank">2</a>
              <a class="cors-steps-img" href="/img/3.JPG" target="_blank">3</a>
            </div>
      </div>


    </div>
  </div>
</section>

`


export async function welcomePage(ctx) {
  let mainContentEl = document.getElementById('main-a')
  mainContentEl.style.background = '#e2eff2'
  mainContentEl.classList.remove('login-view')
  mainContentEl.style.overflow = 'auto';

  console.log(mainContentEl)
  ctx.render(welcomePageTemplate());
  let contentEl = document.querySelector('.content')
  let menu = document.querySelector('.menu')
  let currentInstance = document.querySelector('.currentInstance').innerHTML = `Current instance: <span class="color-instance">${credentials.instName}</span>`
  contentEl.style.background = 'white';
  contentEl.style.width = '100%';
  contentEl.style.height = '100%';
  contentEl.style.display = '-webkit-box';
  contentEl.style.display = '-ms-flexbox';
  contentEl.style.display = 'flex';
  contentEl.style.height = '95vh'

  menu.style.display = 'flex'



  mainContentEl.style.display = 'block'
  let logOut = document.querySelector('.logout').style.display = 'block'
  //  let allWrappers = document.querySelectorAll('.task-wrapper')
  //  console.log('all >',allWrappers)
  let allOptions = document.querySelectorAll('.options')
  allOptions.forEach((btn) => {
    // btn.addEventListener('click',selected)
    btn.classList.remove('clicked')

  })

}