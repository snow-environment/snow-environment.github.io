
import page from './lib/page.mjs'
import { render, html } from './lib.js'
import { loginPage } from './login.js'

import { projectOne } from './allTasks/projectOne.js'
import { projectTwo } from './allTasks/projectTwo.js'
import { projectThree } from './allTasks/projectThree.js'
import { projectFour } from './allTasks/projectFour.js'
import { projectFive } from './allTasks/projectFive.js'
import { projectSix } from './allTasks/projectSix.js'

import { middleWarePage } from './middleware.js'
import { itomPage } from './views/itom-projects.js'
import { itsmPage } from './views/itsm-projects.js'
import { itsmProjectOne } from './allTasks/itsmProjects/itsmProjectOne.js'
const root = document.querySelector('.main-content')
export const credentials = {
  instName: '',
  instUserName: '',
  instPassword: ''
};


page(decoration)
page('/', loginPage)

page('/login', loginPage)

page('/projects', middleWarePage)

page('/itom', itomPage)
page('/itsm', itsmPage)
page('/itsm/1', itsmProjectOne)


page('/itom/1', projectOne)
page('/itom/2', projectTwo)
page('/itom/3', projectThree)
page('/itom/4', projectFour)
page('/itom/5', projectFive)
page('/itom/6', projectSix)



page.start()

function decoration(ctx, next) {
  ctx.render = (content) => render(content, root)
  next()
}


let logOutBtn = document.querySelector('.logout').addEventListener('click', logOut)

function logOut() {
  window.location.href = "/";
}
let backBtn = document.querySelector('.back-btn').addEventListener('click', () => {
  let itom = document.querySelector('.menu').style.display = 'none'
  // let itsm = document.querySelector('.itsm-project-options') //.style.display = 'none'
// console.log(itom)
// console.log(itsm)
})
export let localData = {
  p1: {
    taskOne: false, taskTwo: false, taskThree: false
  },
  p2: {
    taskOne: false, taskTwo: false, taskThree: false
  },
  p3: {
    taskOne: false, taskTwo: false, taskThree: false
  },
  p4: {
    taskOne: false, taskTwo: false, taskThree: false
  },
  p5: {
    taskOne: false, taskTwo: false, taskThree: false
  },
  p6: {
    taskOne: false, taskTwo: false, taskThree: false
  }
}