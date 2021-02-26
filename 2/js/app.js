'use strict';
let score=0
function greeting (){
  let name = prompt('please enter your name');
  return(alert('welcome ' + name + ' lets see is you know 5 things about me'));
}

function q1(){
  let ans1 = prompt('I lived in the US');
  if (ans1 == 'yes' || ans1 == 'y') {
    score++
  return(alert('true, I lived in Indiana for 5 years'))
 }
  else if (ans1=== 'no' ||ans1=== 'n'){return(alert('wrong, I lived in indiana'))}
  else {return(alert('please enter a valid response'))}
}
function q2(){
  let ans2 = prompt('I enjoy boxing');
  if (ans2 === 'yes' || ans2 === 'y') {
    score++
  return(alert('true, I have been boxing since 2019'))
  }
  else if (ans2=== 'no' ||ans2=== 'n'){return(alert('wrong, I do box!'))}
  else {return(alert('please enter a valid response'))}
};
function q3(){
  let ans3 = prompt('I love mlukheye');
  if (ans3 === 'no' || ans3 === 'n') {
    score++
  return(alert('true, I hate mlukheye'))
  }
  else if (ans3=== 'yes' ||ans3=== 'y'){return(alert('wrong, I hate it'))}
  else {return(alert('please enter a valid response'))}
  
  };
function q4(){
  let ans4 = prompt('My dog is called Nairobi');
  if (ans4 === 'yes' || ans4 === 'y') {
  score++
  return(alert('true, and shes amazing <3'))
  }
  else if (ans4=== 'no' ||ans4=== 'n'){return(alert('wrong, her name is Nairobi'))}
  else {return(alert('please enter a valid response'))}
};
function q5(){
  let ans5 = prompt('I have tattoos');
  if (ans5 === 'yes' || ans5 === 'y') {
    score++
  return(alert('true, I have 2 on my right arm'))
  }
  else if (ans5=== 'no' ||ans5=== 'n'){return(alert('wrong, I have 2 '))}
  else {return(alert('please enter a valid response'))}
  
  
};
let trial = 1
function q6(){
  while(trial<5){
    let num = prompt('guess a number');
    trial++
    if (num == 69){
      score++
      alert('correct')
      break    
    }
    else if (num > 69){
      alert('too high')
  }
    else if(num < 69){
      alert('too low')
    };
  }
};
let array = ['Dana', 'Sara', 'Ahmad']
  function q7(){
    while (trial < 7){
      let ans7 = prompt('whats one of my siblings names?')
      if (ans7 == array[0]|| ans7==array[1] || ans7==array[2]){
        score++
        alert('correct')
        break
      
      }
      else{trial++}
      


    }
  };

greeting()
q1()
q2()
q3()
q4()
q5()
q6()
q7()
alert(array)
alert(`you scored ${score} out of 7`)
