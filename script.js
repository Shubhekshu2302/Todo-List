let add=document.getElementById('plus');
let pop=document.getElementById('pop');
let blur=document.getElementById('blur');
let aDD=document.getElementById('add');
let close=document.getElementById('close');
let aDD1=document.getElementById('add1');
let close1=document.getElementById('close1');
let blur2=document.getElementById('blur-2');

add.addEventListener('click',()=>{
 pop.classList.add('active')
blur.classList.add('active')
})

close.addEventListener('click',()=>{
  pop.classList.remove('active')
  blur.classList.remove('active')
  
})
close1.addEventListener('click',()=>{
  pop1.classList.remove('active')
  blur2.classList.remove('active')
  
})

let input =document.getElementById('listHeading')
let input1 =document.getElementById('subListHeading')
let cardy=document.getElementById('card')
aDD.addEventListener('click',()=>{
if(!input.value==""){
  pop.classList.remove('active')
  blur.classList.remove('active')
  cardy.insertAdjacentHTML('beforeend', `<div class='card'><p class='card-heading' onclick='toggleAddItem(this)
  '>${input.value}</p></div>`);
  input.value="";
}
})
aDD1.addEventListener('click',(e)=>{
if(!input1.value==""){
  pop1.classList.remove('active')
  blur2.classList.remove('active')
  console.log(arr)
  if(arr.nextElementSibling!=null){
    arr.nextElementSibling.insertAdjacentHTML('beforeend',`<li class="card-item" onclick="markDone(this)">${input1.value}</li>`)
    ul.innerHTML=arr.nextElementSibling.innerHTML;
  }else{
    arr.parentElement.insertAdjacentHTML('beforeend',`<ul  class="hard"><li class="card-item" onclick="markDone(this)">${input1.value}</li></ul>`)
    ul.innerHTML=arr.nextElementSibling.innerHTML;
  }
 
  input1.value="";
}
})
var arr;
function toggleAddItem(tis){
      blur.classList.add('magic')
      blur2.classList.remove('magic')
      heading.textContent =tis.textContent;
      heading1.textContent =tis.textContent;
      arr=tis;
      if(tis.nextElementSibling!=null){
        ul.innerHTML=tis.nextElementSibling.innerHTML;
      }else{
        ul.innerHTML=""
      }

}
let heading=document.getElementById('currentHeading-1')
let heading1=document.getElementById('currentHeading')
let ul=document.getElementById('singleList')
function back(){
      if(arr.nextElementSibling!=null){
        arr.nextElementSibling.innerHTML=ul.innerHTML;
      }
      blur.classList.remove('magic')
      blur2.classList.add('magic')  
}
let pop1=document.getElementById('popAddItem')

function adder(){
    pop1.classList.add('active')
    blur2.classList.add('active')
}

function markDone(tis){
  tis.classList.add('done')
}

function deleted(){
  arr.parentElement.remove()
  blur.classList.remove('magic')
  blur2.classList.add('magic')  
}