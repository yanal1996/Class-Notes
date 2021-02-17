'use strict';
function greeting (){
  let name = prompt('please enter your name');
  alert('welcome ' + name + ' lets see is you know 5 things about me');
}
function q1(){
  let ans1 = prompt('I lived in the US');
  if (ans1 === 'yes' || ans1 === 'y') {
  alert('true, I lived in Indiana for 5 years');
  }
}
function q2(){
  let ans2 = prompt('I enjoy boxing');
  if (ans2 === 'yes' || ans2 === 'y') {
  alert('true, I have been boxing since 2019');

  }
}
function q3(){
  let ans3 = prompt('I love mlukheye');
  if (ans3 === 'no' || ans3 === 'n') {
  alert('false, I hate mlukheye');
  
  } 
}
function q4(){
  let ans4 = prompt('My dog is called Nairobi');
  if (ans4 === 'yes' || ans4 === 'y') {
  alert('true, and shes amazing <3');
  }
}
function q5(){
  let ans5 = prompt('I have tattoos');
  if (ans5 === 'yes' || ans5 === 'y') {
  alert('true, I have 2 on my right arm');
  
  }
}
let trial = 1
function q6(){
  while(trial<5){
    let num = prompt('guess a number');
    let trial = trial + 1
    if (num = 69){alert('correct')}
    else if (num > 69){alert('too high')}
    else if(num < 69){alert('too low')};
  }
}
  function q7(){
    while (trial < 7){
      let array = ['Dana', 'Sara', 'Ahmad']
      let ans7 = prompt('whats one of my siblings names?')
      if (ans7 = array){alert('correct')
      let trial = trial + 20}
      else if (ans7 != array){trial = trial + 1}
      alert(array)


    }
  }

greeting();
q1();
q2();
q3();
q4();
q5();
q6();
q7();
