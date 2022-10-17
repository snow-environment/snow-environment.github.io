
import page from './lib/page.mjs'
import {render, html} from './lib.js'
import { loginPage } from './login.js'
import { tasksPage } from './tasks.js'
import { tasksOnePage } from './allTasks/taskOne.js'
import { tasksTwoPage } from './allTasks/taskTwo.js'
const root = document.querySelector('.main-content')
 export const credentials ={
   instName:'',
   instUserName:'',
   instPassword:''
 };
page(decoration)
page('/',loginPage)

page('/login',loginPage)
page('/tasks',tasksPage)
page('/tasks/1',tasksOnePage)
page('/tasks/2',tasksTwoPage)


page.start()

function decoration(ctx,next){
    ctx.render = (content) => render(content,root)
      next()
    }


//     const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);
// xhr.onload = () => {
//   console.log(xhr.responseURL); // http://example.com/test
// };
// xhr.send(null);

//     xhr.open("GET", `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4)  { 
//     var serverResponse = xhr.responseText;
//   }
// };
// xhr.send(null);

