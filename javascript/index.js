var botoes = document.getElementsByClassName("drum");
var index = document;


for(let i = 0; i < botoes.length;i++){
    //perceba que a chamada da função é sem parênteses porquê, se vc passa com eles, a função é executada na hora
    botoes[i].addEventListener("click",function(){
        toca(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
});

//

//usar o parametro de event na função anonima deixa vc manipular a info que ele trás
index.addEventListener("keypress",function(event){
    toca(event.key);
    buttonAnimation(event.key);
});

function toca(letra){
        let audio = new Audio("./sounds/crash.mp3");
        switch(letra){
            case "w":
                audio.play();
                break;
            case "a":
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;    
            case "s":
                 audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;  
            case "j":
                 audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;    
            case "k":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                 audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;    
        }
    };

}


function buttonAnimation(letra){
    let tecla = document.querySelector("." + letra);
    tecla.classList.toggle("pressed");
    setTimeout(() =>{
        tecla.classList.toggle("pressed");
    },200);
}

