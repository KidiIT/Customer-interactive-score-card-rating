let frm = document.forms.interaction_form;
let dataNumber = document.querySelectorAll('[data-number]')
let dataRateNumber = document.querySelector('[data-rateNumber]')
let rateArr = ["bad","fair","good","better","perfect"];
let totalNum
for (let i = 0; i < dataNumber.length; i++) {
  const element = dataNumber[i];
  element.onclick=()=>{
    let data = Number(element.dataset.star)
    totalNum = data

    for (let j = 0; j < dataNumber.length; j++) {
      if (j <data) {
        dataNumber[j].classList.add('rating')
      }else{
       dataNumber[j].classList.remove('rating')
        
      }
      
    }
  }
  
}

function slider (x){
  if (x == 1) {
   
  }else {
   
  }
}

frm.onsubmit = (e)=>{
  e.preventDefault();
  
 
}
let div1 = document.querySelector('.div1')
let div2 =  document.querySelector('.div2')
const next =()=>{
  div1.classList.add('slider')
 div2.classList.add('slider')
  if (div1.classList.contains('slider2') || div1.classList.contains('slider3')) {
    div1.classList.remove('slider3')
    div2.classList.remove('slider2')
  }
  
  if (totalNum == undefined) {
    dataRateNumber.textContent =" "+ 0 +" out of "+ dataNumber.length 
  }else{
    dataRateNumber.textContent =" "+ totalNum +" out of "+ dataNumber.length
  }
}

function previous (){
  div1.classList.add('slider3')
  div2.classList.add('slider2')
  if (div1.classList.contains('slider') || div1.classList.contains('slider')) {
    div1.classList.remove('slider')
    div2.classList.remove('slider')
  }
}
