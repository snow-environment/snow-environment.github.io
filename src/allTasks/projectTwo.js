
import { twoOne } from '../allTests/projectTwo/testOne.js';
import { twoThree } from '../allTests/projectTwo/testThree.js';
import { twoTwo } from '../allTests/projectTwo/testTwo.js';
import { localData } from '../app.js';
import {render, html} from '../lib.js'
import { completeCheck } from '../util/completeChecker.js';
import { validation } from '../util/validate.js';

const projectTwoTemplate = () => html`

<section class="projectOne">
  <h1 class="project-heading">Mini Project 2</h1>
  <p class="project-agenda">In this project you will find tasks for <span class="bold-me">Discovery</span>.</p>

  
  <!-- // t1-->
  <div class="task-wrapper">
    <h2>Task 1</h2>
    <div class="short-description">
      <p class="task-info">1. Open your ServiceNow Instance and create a new mid user:</p>
  <ul class="requirements">
     <li class="req-for-task">Create a new user with UserID = <span class="additional-info">snow_mid_user</span></li>
     <li class="req-for-task">First name = <span class="additional-info">Raymond</span>, Last Name = <span class="additional-info">Denton</span></li>
     <li class="req-for-task">Assign <span class="additional-info">mid_server</span> role to the user</li>
     <li class="req-for-task">Check <span class="additional-info">Password needs reset</span> and press <span class="additional-info">Submit</span> button</li>
     <li class="req-for-task">Open the <span class="additional-info">snow_mid_user</span> record and set password for him. Save the password in a plain text in a separate file. Finally Press <span class="additional-info">Update</span></li>
  </ul>
    <p class="task-info">2. Verify snow_mid_user:</p>
  <ul class="requirements">
    <li class="req-for-task">Log out as admin and login with the new user - <span class="additional-info">snow_mid_user</span></li>
    <li class="req-for-task">Promp window will apear to change the password for the <span class="additional-info">snow_mid_user</span>. In the Current Password field paste the password you have copied from the previous step</br>and then set a new more convinient password the the user by your choice. Remember the new password, you will need it in the further setup</li>
    <li class="req-for-task">Login again as a <span class="additional-info">admin</span></li>
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
  <!-- // t 2 -->
  <div class="task-wrapper">
  <h2>Task 2</h2>
  <div class="short-description">
    
  <p class="task-info">1. Download and Install <a target="_blank" href="https://www.virtualbox.org/"><span class="redirections">Oracle VirtualBox</span></a> for your host machine</p>
  <p class="task-info">2. Download and Install <a target="_blank" href="https://www.vagrantup.com/"><span class="redirections">Vagrant</span></a>. Restart will be required to finish the installation.</br>Keep in mind that Vagrant doesn't have any GUI and it's working only as CLI client in your terminal</p>
  <p class="task-info">3. Create a new folder on your PC called <span class="additional-info">Vagrant Ubuntu Server</span>. Open an Terminal/PowerShell inside the folder for your host machine</p>
  <ul class="requirements">
  <li class="req-for-task">Type <span class="additional-info">vagrant box add --insecure karastoyanov/doitwise</span> and wait until the download process is finished</li>
  <li class="req-for-task">Type <span class="additional-info">vagrant init karastoyanov/doitwise --box-version 1.0</span>. New file "Vagrantfile" has been created. Open the file with Notepad or any other</br>text-editor and replace it's contents with the file from the <a target="_blank" href="https://github.com/snow-environment/snow-environment.github.io/blob/main/vagrant/Vagrantfile.rb"><span class="redirections">LINK</span></a></li>
  <li class="req-for-task">Type <span class="additional-info">vagrant up</span> and wait for vagrant to start the virtual machine</li>
  <li class="req-for-task">If you are getting <span class="additional-info">default: Warning: Authentication failure. Retrying...</span> error that's fine. Press Ctrl+C to cancel</li>
  <li class="req-for-task">Type <span class="additional-info">vagrant ssh</span>, you will be asked asked to enter the password, use vagrant</li>
  <li class="req-for-task">You new VM is created. username: <span class="additional-info">vagrant</span> password: <span class="additional-info">vagrant</span> hostname <span class="additional-info">doitwise</span></li>
  <li class="req-for-task">Host Ports <span class="additional-info">20022</span> and <span class="additional-info">2222</span> on Host IP <span class="additional-info">127.0.0.1</span> are open to Guest Port <span class="additional-info">22</span>. You can use any other SSH client to open a session to the VM</li>
  </ul>
  <p class="task-info">4. Download MID server on your virtual machine</p>
  <ul class="requirements">
  <li class="req-for-task">Go to ServiceNow Instance and navigate to <span class="additional-info bold-me">Applications</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">MID Server</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Downloads</span></li>
  <li class="req-for-task">Check <span class="additional-info">Download MID Server as ZIP archive</span> to be able to see the download links for zip file</li>
  <li class="req-for-task">Copy the link for Linux(ZIP)</li>
  <li class="req-for-task">Go back in your virtual machine session and type <span class="additional-info">wget paste the link, you can use the right-click on your mouse</span></li>
  <li class="req-for-task">After the downloading process is finished, type <span class="additional-info">unzip name-of-the-zip-file</span></li>
  <li class="req-for-task">If you don't have unzip installed, type in <span class="additional-info">sudo apt install -y unzip</span> and try again the above step</li>
  <li class="req-for-task">If you've done everything succesfully you should be able to have a new folder called <span class="additional-info">agent</span> inside your VM</li>
  </ul>
  <img src="https://github.com/snow-environment/snow-environment.github.io/blob/main/img/how-to/mid-server-ubuntu.jpg?raw=true" alt="Agent Folder" style="width:600px;height:300px;">
  <img src="https://github.com/snow-environment/snow-environment.github.io/blob/main/img/how-to/mid-server-unziped.jpg?raw=true" alt="MID Server Contents" style="width:600px;height:300px;">
  <p class="task-info">5. Install and Configure MID Server on your VM</p>
  <ul class="requirmenrs">
  <li class="req-for-task">Open the <span class="additional-info">agent</span> folder with <span class="additional-info">cd agent</span> and type <span class="additional-info"></span>"ls -al" to list the contents of the folder</li>
  <li class="req-for-task">You should be able to see <span class="additional-info">configure.sh</span> shell script. Run the script by typing <span class="additional-info">sudo ./configure.sh</span></li>
  <li class="req-for-task">Follow the steps to complete the MID Server installation</li>
  <li class="req-for-task">Enter the ServiceNow Instance URL [https://YOUR_INSTANCE.service-now.com/] : Enter your ServiceNow Instance URL address</li>
  <li class="req-for-task">Do you want to use proxy? [Enter Y or N] : Choose <span class="additional-info">N</span></li>
  <li class="req-for-task">Do you want to use Mutual Authentication? [Enter Y or N] : Choose <span class="additional-info">N</span></li>
  <li class="req-for-task">Enter the username for mid user : Choose your mid user --> <span class="additional-info">snow_mid_user</span></li>
  <li class="req-for-task">Enter the password for mid user: Type in the password you've set in Task 1</li>
  <li class="req-for-task">Enter the Mid Server Name [My_Linux_Mid_Server] : Type <span class="additional-info">SNOW_MID</span></li>
  <li class="req-for-task">Enter the unique name for the service to be created [mid] : Type <span class="additional-info">snow</span></li>
  <li class="req-for-task">Enter the Non-Root User Name to run this service : <span class="additional-info">vagrant</span></li>
  </ul>
  <p class="task-info">6. Go back to your ServiceNow Instance and Validate the MID Server</p>
  <ul class="requirmenrs">
  <li class="req-for-task">Navigate to <span class="additional-info bold-me">Applications</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Discovery</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">MID Servers</span></li>
  <li class="req-for-task">Find <span class="additional-info">SNOW_MID</span> in the list and open the record</li>
  <li class="req-for-task">Scroll down to <span class="additional-info">Related Links</span> and press <span class="additional-info">Validate</span></li>
  <li class="req-for-task">Wait until the MID server is being validated(if the process takes too long, go back in your VM, restart the MID server service and try again)</li>
  </ul>
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
  
  <!-- // t3 -->
  <div class="task-wrapper">
  <h2>Task 3</h2>
  <div class="short-description">
  <p class="task-info">1. Create Linux/UNIX credentials:</p>
  <ul class="requirements">
  <li class="req-for-task">In your ServiceNow instance navigate to <span class="additional-info bold-me">All Aplications</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Discovery</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Credentials</span></li>
  <li class="req-for-task">Create new credetials using <span class="additional-info">SSH Credentials</span> type</li>
  <li class="req-for-task">Name = <span class="additional-info">SNOW_Linux_Credentials</span></li>
  <li class="req-for-task">Username = <span class="additional-info">vagrant</span> / Password = <span class="additional-info">vagrant</span>, the login credentials for the VM user</li>
  <li class="req-for-task">Test the credentials against the MID server you have created in Task 2. You can find it's IP address opening it's record</li>
  </ul>
  <p class="task-info">2. Perform a Quick Discovery:</p>
  <ul class="requirements">
  <li class="req-for-task">Navigate to <span class="additional-info bold-me">All Application</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Discovery</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Discovery Schedules</span></li>
  <li class="req-for-task">Click on <span class="additional-info">Quick Discovery</span></li>
  <li class="req-for-task">Choose the <span class="additional-info">SNOW_MID</span> server and type in the IP address of the server</li>
  <li class="req-for-task">Press <span class="additional-info">OK</span> to start Quick Discovery</li>
  <li class="req-for-task">Wait until the discovery is finished and take a look on the Discovery Log and ECC Queue</li>
  </ul>
  <p class="task-info">3. Check your VM:</p>
  <ul class="requirements">
  <li class="req-for-task">Navigate to <span class="additional-info bold-me">All Applications</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Disovery</span> <span class="arrow">&rarr;</span> <span class="additional-info bold-me">Dashboard</span></li>
  <li class="req-for-task">Under <span class="additional-info">Newly discovered devices</span> you can see that you have one new Linux Server discovered</li>
  <li class="req-for-task">Open the record and preview the details</li>
  </ul>
  </div>
  <!--  -->
  
  
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

export async function projectTwo(ctx) {


  ctx.render(projectTwoTemplate());
  let projectTasks = localData.p2

  let allWrappers = document.querySelectorAll('.task-wrapper')

  let allOptions = document.querySelectorAll('.options')
 

  allOptions.forEach((btn) =>
  {

    btn.classList.remove('clicked')
   
  })

  let currentClicked = allOptions[1];
  currentClicked.classList.add('clicked')
  let mainContentEl = document.querySelector('.main-content')
  mainContentEl.style.overflow = 'auto'

  if (projectTasks.taskOne == true) {
 
    let completeSection = allWrappers[0];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }
  if (projectTasks.taskTwo == true) {
    let completeSection = allWrappers[1];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }
  if (projectTasks.taskThree == true) {
    let completeSection = allWrappers[2];
    let removeBtn = completeSection.getElementsByTagName('button')[0]

    removeBtn.style.display = 'none'

    completeSection.querySelector('.validated').style.display = 'block'
  }
  let btn = document.querySelector('.validate-task-btn')
  let validateButtons = document.querySelectorAll('.validate-task-btn').forEach(btn => {
    btn.addEventListener('click', onSubmit)
  });
  
 
    async function onSubmit(e) {
      e.preventDefault()
      let eTarget = e.target;
    
      let eParent = eTarget.parentNode;
      let notValidated = eParent.querySelector('.not-validated')
      notValidated.style.display = 'none'
      eTarget.disabled = true;
      eTarget.classList.add('no-hover')
      eTarget.classList.add('grey-me')
      eTarget.textContent = 'Processing..'

      let response = ''
      if (eTarget.classList.contains('one')) {
        response = await twoOne()
  
      }
      if (eTarget.classList.contains('two')) {
        response = await twoTwo()
  
      }
  
   
      if (eTarget.classList.contains('three')) {
        response = await twoThree()
  
      }
  

      validation(response, eTarget, notValidated, 'p2')




      completeCheck(projectTasks,currentClicked)
  
  
  
  
  
    }
  }
  