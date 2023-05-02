var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');
for(item of btn){
    item.addEventListener('click',function(event){
        btntext=event.target.innerText;
        if(btntext=='x')
        {
            btntext='*';
        }
        if(btntext=="÷")
        {
             btntext='/';
        }
    
        screen.value+=btntext;
    });
} 
function calculate(){
    screen.value=eval(screen.value);

}
function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function log(){
    screen.value=Math.log(screen.value);
}

function pow(){
    screen.value=Math.pow(screen.value,2);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}

function pi(){
    screen.value=3.14159265359;
}

function e(){
    screen.value=2.71828182846;
}

function factorial(){
    let fact=1;
    for(let num=screen.value; num>=1;num--){
   
   fact*=num;
    }
    screen.value=fact;
}

function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1); 
}

function percentage(){
    screen.value=screen.value/100;
}