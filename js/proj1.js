


var headOne = document.querySelector("#One");
var headTwo = document.querySelector("#Two");
var headThree = document.querySelector("#Three");


headOne.addEventListener('mouseover',function(){
  headOne.style.color = 'purple';
})

headOne.addEventListener('mouseout',function(){
  headOne.style.color = '';
})

headTwo.addEventListener('mouseover',function(){
  headTwo.style.color = 'blue';
})


headTwo.addEventListener('mouseout',function(){
  headTwo.style.color = '';
})


headThree.addEventListener('mouseover',function(){
  headThree.style.color = 'orange';
})

headThree.addEventListener('mouseout',function(){
  headThree.style.color = '';
})
