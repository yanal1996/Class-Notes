'use strict';
function greeting (){
  let name = prompt('please enter your name');
  return(alert('welcome ' + name + ' lets see is you know 5 things about me'));
}
let score = 0
function q1(){
  let ans1 = prompt('I lived in the US');
  if (ans1 === 'yes' || ans1 === 'y') {
    let score = score +1
  return(alert('true, I lived in Indiana for 5 years'))
 }
  else if (ans1=== 'no' ||ans1=== 'n'){return(alert('wrong, I lived in indiana'))}
  else {return(alert('please enter a valid response'))}
};
function q2(){
  let ans2 = prompt('I enjoy boxing');
  if (ans2 === 'yes' || ans2 === 'y') {
    let score = score + 1
  return(alert('true, I have been boxing since 2019'))
  }
  else if (ans2=== 'no' ||ans2=== 'n'){return(alert('wrong, I do box!'))}
  else {return(alert('please enter a valid response'))}
};
function q3(){
  let ans3 = prompt('I love mlukheye');
  if (ans3 === 'no' || ans3 === 'n') {
    let score = score + 1
  return(alert('true, I hate mlukheye'))
  }
  else if (ans3=== 'no' ||ans3=== 'n'){return(alert('wrong, I hate it'))}
  else {return(alert('please enter a valid response'))}
  
  };
function q4(){
  let ans4 = prompt('My dog is called Nairobi');
  if (ans4 === 'yes' || ans4 === 'y') {
    let score = score + 1
  return(alert('true, and shes amazing <3'))
  }
  else if (ans4=== 'no' ||ans4=== 'n'){return(alert('wrong, her name is Nairobi'))}
  else {return(alert('please enter a valid response'))}
};
function q5(){
  let ans5 = prompt('I have tattoos');
  if (ans5 === 'yes' || ans5 === 'y') {
    let score = score + 1
  return(alert('true, I have 2 on my right arm'))
  }
  else if (ans5=== 'no' ||ans5=== 'n'){return(alert('wrong, I have 2 '))}
  else {return(alert('please enter a valid response'))}
  
  
};
let trial = 1
function q6(){
  while(trial<5){
    let num = prompt('guess a number');
    let trial = trial + 1
    if (num = 69){
      let score = score + 1
      return(alert('correct'))
      break;
    }
    else if (num > 69){return(alert('too high'))}
    else if(num < 69){return(alert('too low'))};
  }
};
  function q7(){
    while (trial < 7){
      let array = ['Dana', 'Sara', 'Ahmad']
      let ans7 = prompt('whats one of my siblings names?')
      if (ans7 = array){
        let score = score + 1
        return(alert('correct'))
        break;
      
      }
      else if (ans7 != array){trial = trial + 1}
      


    }
  };

greeting();
q1();
q2();
q3();
q4();
q5();
q6();
q7();
alert(array);
alert('you scored ' + score + ' out of 7');
