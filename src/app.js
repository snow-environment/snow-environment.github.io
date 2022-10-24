
import page from './lib/page.mjs'
import {render, html} from './lib.js'
import { loginPage } from './login.js'
import { tasksPage } from './projects.js'
import { projectOne } from './allTasks/projectOne.js'
import { projectTwo } from './allTasks/projectTwo.js'
import { projectThree } from './allTasks/projectThree.js'
import { projectFour } from './allTasks/projectFour.js'
import { projectFive } from './allTasks/projectFive.js'
import { projectSix } from './allTasks/projectSix.js'
const root = document.querySelector('.main-content')
 export const credentials ={
   instName:'',
   instUserName:'',
   instPassword:''
 };


page(decoration)
page('/',loginPage)

page('/login',loginPage)
page('/projects',tasksPage)
page('/projects/1',projectOne)
page('/projects/2',projectTwo)
page('/projects/3',projectThree)
page('/projects/4',projectFour)
page('/projects/5',projectFive)
page('/projects/6',projectSix)


page.start()

function decoration(ctx,next){
    ctx.render = (content) => render(content,root)
      next()
    }


let logOutBtn = document.querySelector('.logout').addEventListener('click',logOut)

function logOut(){
  window.location.href = "/";
}
export let localData = {
  p1:{taskOne:false,taskTwo:false,taskThree:false
  }
}