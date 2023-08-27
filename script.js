const celsiusField= document.querySelector("#celsius");
const convertBtn= document.querySelector("#convert-btn");
const degree= document.querySelector("#degree");
const tempType= document.querySelector("#temp-type");

window.addEventListener("load",()=>{
    degree.value ="";
    celsiusField.innerHTML="";
})

convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    converttocelsius();

    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting... </span>"

    setTimeout(() =>{
        convertBtn.innerHTML = "<span> Convert </span>"
    },1000)
})

function converttocelsius(){
    let inputValue= degree.value;

   setTimeout(() =>{
    if(tempType.value ==="fahrenheit"){
        const fahrenheitTocelsius =(inputValue *(9/5))+32;
        celsiusField.innerHTML=`${fahrenheitTocelsius.toFixed(3)} &deg;
        c`;

    }
    else if(tempType.value ==="kelvin"){
        const kelvinTocelsius = inputValue - 273.15;
        celsiusField.innerHTML =`${kelvinTocelsius.toFixed(3)} &deg;
        c`;
    }
   },1100)
}
