//task button
const taskBtn = document.getElementById('add-tasks');
taskBtn.addEventListener('click', addTasks);
//const tasks = document.getElementsByClassName('.')

//add tasks to list for the day
function addTasks(){
    const taskArray = [];
    for (let i = 1; i < 5; i++){
        const task = prompt('Please enter your top 4 tasks for today');
        taskArray.push(task);
    }
    populateList(taskArray);
    taskBtn.setAttribute('disabled',true);
    
}
    //when clicked, it sets off a prompt 
    //take in 4 inputs and populate the list
function populateList(taskArray){
    for(let i = 0;i<taskArray.length;i++){
        const listItem = document.createElement('button');
        listItem.innerHTML = taskArray[i];
        listItem.setAttribute('id', `task-button${i}`)
        document.getElementById('list').appendChild(listItem);
        console.log(listItem)
        
    }
    const btn0 = document.getElementById('task-button0')
    btn0.addEventListener('click', function() {
        const button0 = document.getElementById('task-button0')
        button0.setAttribute('disabled',true)
        earnCash()
    })
    const btn1 = document.getElementById('task-button1')
    btn1.addEventListener('click', function() {
        const button1 = document.getElementById('task-button1')
        button1.setAttribute('disabled',true)
        earnCash()
    })
    const btn2 = document.getElementById('task-button2')
    btn2.addEventListener('click', function() {
        const button2 = document.getElementById('task-button2')
        button2.setAttribute('disabled',true)
        earnCash()
    })
    const btn3 = document.getElementById('task-button3')
    btn3.addEventListener('click', function() {
        const button3 = document.getElementById('task-button3')
        button3.setAttribute('disabled',true)
        earnCash()
    })
}

// const btn1  = document.getElementById('task-button1')
// btn1.addEventListener('click', btn1.setAttribute('disabled',true))
// const btn2  = document.getElementById('task-button2')
// btn2.addEventListener('click',earnCash(btn2))
// const btn3  = document.getElementById('task-button3')
// btn3.addEventListener('click',earnCash(btn3))
// const btn4  = document.getElementById('task-button4')
// btn4.addEventListener('click',earnCash(btn4))
//every time you populate
    //add a button and task to list
        //if you click each button
            //increment the score
            //gets grayed out (button hidden)

//add event listener for each task button
// const taskButton = document.querySelectorAll('.task-button').addEventListener('click', earnCash);
// btn1.addEventListener('click', earnCash)

function earnCash(){
    const score = document.getElementById('score');

    if(!localStorage['funds']){
        localStorage.setItem('funds', 1);
    } else {
        let temp = Number(localStorage['funds']);
        temp += 1;
        localStorage['funds'] = temp;
    }
    score.innerHTML = localStorage['funds'];
}

//function of cash in button
const cashButton = document.getElementById('cash-in-button');
cashButton.addEventListener('click', cashIn)

function cashIn(){
    let currentScore = Number(localStorage['funds']);
    console.log(currentScore)
    if (currentScore < 10){
        alert('Sorry, you don\'t have enough cash!')
    } else {
        currentScore = currentScore - 10;
        score.innerHTML = currentScore;
        localStorage['funds'] = currentScore;
        alert('Go buy yourself some bubble tea!!!!')
    }
}





