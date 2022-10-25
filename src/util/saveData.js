import { localData } from "../app.js"


export function saveMe(btn, currentProject) {
    if (currentProject == 'p1') {
        console.log('saveMe p 1')
        checkBtn(btn, currentProject)
    }
    if (currentProject == 'p2') {
        checkBtn(btn, currentProject)
    }
    if (currentProject == 'p3') {

    }
    if (currentProject == 'p4') {
        
    }
    if (currentProject == 'p5') {

    }
    if (currentProject == 'p6') {

    }
}

function checkBtn(btn, project) {
    if (btn.classList.contains('one')) {
        console.log('contains ONE')
        let p = localData[project]
        console.log('CHECH BTN', project)
        p.taskOne = true;
    }
    if (btn.classList.contains('two')) {
        console.log('contains TWO')
        let p = localData[project]
        p.taskTwo = true;
    }
    if (btn.classList.contains('three')) {
        console.log('contains Three')
        let p = localData[project]

        p.taskThree = true;

    }
}
