export function completeCheck(tests,clicked){
    console.log(' CURRENT TEST',tests)
    let taskCounter = 0;
    let trueTasks = 0;
    for (const task in tests) {
        taskCounter++;
        
        if(tests[task] ==true){
            trueTasks++;
        }
    }
    if(taskCounter == trueTasks){
    clicked.textContent ='Completed'
    clicked.style.background ='#4a8350'
    }
    }
