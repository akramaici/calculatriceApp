let container=document.getElementById("result-box");
let buttons=document.getElementsByClassName("touche");
let btnCalculate=document.getElementById("button-equal");
let btnDelete=document.getElementById("button-delete-all");
let btnAc=document.getElementById("button-delete-laste-number");
let result=document.createElement("p");
Array.from(buttons).forEach(button=>{
    button.addEventListener("click",()=>{
        let value=document.createElement("p");
        value.textContent=button.textContent;
        container.appendChild(value);
    })
})
btnCalculate.addEventListener("click",()=>{
  result.textContent=parseFloat(eval(container.textContent));
  container.innerHTML=""
  container.appendChild(result);
})
btnDelete.addEventListener("click",()=>{
    container.innerHTML=""
})
btnAc.addEventListener("click",()=>{
    let lastelement=container.lastChild;
    if(lastelement){
        container.removeChild(lastelement);
    }
})