
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
<p class="task-info">1. Download and Install <a href="https://www.virtualbox.org/">Oracle VirtualBox</a> for your host machine</p>
<p class="task-info">2. Download and Install <a href="https://www.vagrantup.com/">Vagrant</a>. Restart will be required to finish the installation.</br>Keep in mind that Vagrant doesn't have any GUI and it's working only as CLI client in your terminal</p>
<p class="task-info">3. Create a new folder on your PC called "Vagrant Ubuntu Server". Open an Terminal/PowerShell inside the folder for your host machine</p>
<ul class="requirements">
<li class="req-for-task">Type "vagrant box add --insecure karastoyanov/doitwise" and wait until the download process is finished</li>
<li class="req-for-task">Type "vagrant init karastoyanov/doitwise --box-version 1.0". New file "Vagrantfile" has been created. Open the file with Notepad or any other</br>text-editor and replace it's contents with the file from the <a href="https://github.com/snow-environment/snow-environment.github.io/blob/main/vagrant/Vagrantfile.rb">LINK</a></li>
<li class="req-for-task">Type "vagrant up" and wait for vagrant to start the virtual machine</li>
<li class="req-for-task">If you are getting "default: Warning: Authentication failure. Retrying..." error that's fine. Press Ctrl+C to cancel</li>
<li class="req-for-task">Type "vagrant ssh", you will be asked asked to enter the password, use vagrant</li>
<li class="req-for-task">You new VM is created. username: "vagrant" password: "vagrant" hostname "doitwise"</li>
<li class="req-for-task">Host Ports "20022" and "2222" on Host IP "127.0.0.1" are open to Guest Port "22". You can use any other SSH client to open a session to the VM</li>
</ul>
<p class="task-info">4. Download MID server on your virtual machine</p>
<ul class="requirements">
<li class="req-for-task">Go to ServiceNow Instance and navigate to "Applications --> MID Server --> Downloads"</li>
<li class="req-for-task">Check "Download MID Server as ZIP archive" to be able to see the download links for zip file</li>
<li class="req-for-task">Copy the link for Linux(ZIP)</li>
<li class="req-for-task">Go back in your virtual machine session and type "wget paste the link, you can use the right-click on your mouse"</li>
<li class="req-for-task">After the downloading process is finished, type "unzip name-of-the-zip-file"</li>
<li class="req-for-task">If you don't have unzip installed, type in "sudo apt install -y unzip" and try again the above step</li>
<li class="req-for-task">If you've done everything succesfully you should be able to have a new folder called "agent" inside your VM</li>
</ul>
<img src="https://github.com/snow-environment/snow-environment.github.io/blob/main/img/how-to/mid-server-ubuntu.jpg?raw=true" alt="Agent Folder" style="width:600px;height:300px;">
<img src="https://github.com/snow-environment/snow-environment.github.io/blob/main/img/how-to/mid-server-unziped.jpg?raw=true" alt="MID Server Contents" style="width:600px;height:300px;">
<p class="task-info">5. Install and Configure MID Server on your VM</p>
<ul class="requirmenrs">
<li class="req-for-task">Open the "agent" folder with "cd agent" and type "ls -al" to list the contents of the folder</li>
<li class="req-for-task">You should be able to see "configure.sh" shell script. Run the script by typing "sudo ./configure.sh"</li>
<li class="req-for-task">Follow the steps to complete the MID Server installation</li>
<li class="req-for-task">Enter the ServiceNow Instance URL [https://YOUR_INSTANCE.service-now.com/] : Enter your ServiceNow Instance URL address</li>
<li class="req-for-task">Do you want to use proxy? [Enter Y or N] : Choose "N"</li>
<li class="req-for-task">Do you want to use Mutual Authentication? [Enter Y or N] : Choose "N"</li>
<li class="req-for-task">Enter the username for mid user : Choose your mid user --> "snow_mid_user"</li>
<li class="req-for-task">Enter the password for mid user: Type in the password you've set in Task 1</li>
<li class="req-for-task">Enter the Mid Server Name [My_Linux_Mid_Server] : Type "SNOW_MID"</li>
<li class="req-for-task">Enter the unique name for the service to be created [mid] : Type "snow"</li>
<li class="req-for-task">Enter the Non-Root User Name to run this service : "vagrant"</li>
</ul>
<p class="task-info">6. Go back to your ServiceNow Instance and Validate the MID Server</p>
<ul class="requirmenrs">
<li class="req-for-task">Navigate to "Applications - Discovery - MID Servers"</li>
<li class="req-for-task">Find "SNOW_MID" in the list and open the record</li>
<li class="req-for-task">Scroll down to "Related Links" and press "Validate"</li>
<li class="req-for-task">Wait until the MID server is being validated(if the process takes too long, go back in your VM, restart the MID server service and try again)</li>
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
<p class="task-info">1. Create Linux/UNIX credentials:</p>
<ul class="requirements">
<li class="req-for-task">In your ServiceNow instance navigate to "All Aplications --> Discovery --> Credentials"</li>
<li class="req-for-task">Create new credetials using "SSH Credentials" type</li>
<li class="req-for-task">Name="SNOW_Linux_Credentials"</li>
<li class="req-for-task">Username="vagrant" / Password="vagrant", the login credentials for the VM user</li>
<li class="req-for-task">Test the credentials against the MID server you have created in Task 2. You can find it's IP address opening it's record</li>
</ul>
<p class="task-info">2. Perform a Quick Discovery:</p>
<ul class="requirements">
<li class="req-for-task">Navigate to "All Application --> Discovery --> Discovery Schedules"</li>
<li class="req-for-task">Click on "Quick Discovery"</li>
<li class="req-for-task">Choose the "SNOW_MID" server and type in the IP address of the server</li>
<li class="req-for-task">Press "OK" to start Quick Discovery</li>
<li class="req-for-task">Wait until the discovery is finished and take a look on the Discovery Log and ECC Queue</li>
</ul>
<p class="task-info">3. Check your VM:</p>
<ul class="requirements">
<li class="req-for-task">Navigate to "All Applications --> Disovery --> Dashboard"</li>
<li class="req-for-task">Under "Newly discovered devices" you can see that you have one new Linux Server discovered</li>
<li class="req-for-task">Open the record and preview the details</li>
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
  