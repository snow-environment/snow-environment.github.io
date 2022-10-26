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
        console.log(' this is checkBtn, p1',p)
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
    if (btn.classList.contains('four')) {
        console.log('contains four')
        let p = localData[project]

        p.taskFour = true;

    }
    if (btn.classList.contains('five')) {
        console.log('contains five')
        let p = localData[project]

        p.taskFive = true;

    }
    if (btn.classList.contains('six')) {
        console.log('contains six')
        let p = localData[project]

        p.taskSix = true;

    }
    if (btn.classList.contains('seven')) {
        console.log('contains seven')
        let p = localData[project]

        p.taskSeven = true;

    }
    if (btn.classList.contains('eight')) {
        console.log('contains eight')
        let p = localData[project]

        p.taskEight = true;

    }
    if (btn.classList.contains('nine')) {
        console.log('contains nine')
        let p = localData[project]

        p.taskNine = true;

    }
    if (btn.classList.contains('ten')) {
        console.log('contains ten')
        let p = localData[project]

        p.taskTen = true;

    }
}
