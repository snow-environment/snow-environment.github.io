
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
