import { localData } from "../app.js"


export function saveMe(btn, currentProject) {
    if (currentProject == 'p1') {

        checkBtn(btn, currentProject)
    }
    if (currentProject == 'p2') {
        checkBtn(btn, currentProject)
    }
    if (currentProject == 'p3') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p4') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p5') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p6') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p7') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p8') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p9') {
        checkBtn(btn, currentProject)

    }
    if (currentProject == 'p10') {
        checkBtn(btn, currentProject)

    }
}

function checkBtn(btn, project) {
    if (btn.classList.contains('one')) {
        let p = localData[project]
        p.taskOne = true;
    }
    if (btn.classList.contains('two')) {
        let p = localData[project]
        p.taskTwo = true;
    }
    if (btn.classList.contains('three')) {
        let p = localData[project]

        p.taskThree = true;

    }
    if (btn.classList.contains('four')) {
        let p = localData[project]

        p.taskFour = true;

    }
    if (btn.classList.contains('five')) {
        let p = localData[project]

        p.taskFive = true;

    }
    if (btn.classList.contains('six')) {
        let p = localData[project]

        p.taskSix = true;

    }
    if (btn.classList.contains('seven')) {
        let p = localData[project]

        p.taskSeven = true;

    }
    if (btn.classList.contains('eight')) {
        let p = localData[project]

        p.taskEight = true;

    }
    if (btn.classList.contains('nine')) {
        let p = localData[project]

        p.taskNine = true;

    }
    if (btn.classList.contains('ten')) {
        let p = localData[project]

        p.taskTen = true;

    }
}
