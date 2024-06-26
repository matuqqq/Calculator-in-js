let display = document.getElementById("display")


function conc(dato){
display.innerHTML += dato;
}

function enter(){
    try{
        display.innerHTML=eval(display.innerHTML);
    }
    catch{
        display.innerHTML= "math error";
    }
}

function clean(){
    display.innerText = '';
}
