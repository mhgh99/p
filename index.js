var btnLength = document.querySelectorAll("button").length;
var clickHtml;
for(var i=0;i<btnLength;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        clickHtml=this.innerHTML;
        makeSound(clickHtml);
        animation(clickHtml)
    })
}


document.addEventListener("keydown",function(event){

    makeSound(event.key);
    animation(event.key);


})



function makeSound(key){
    switch(key){
        case("q"):
            var s1 = new Audio("piano-a_A_major.wav");
            s1.play();
            break;
        case ("w"):
            var s2 = new Audio("piano-b_B_major.wav");
            s2.play();
            break;
        case("e"):
            var s3 = new Audio("piano-d_D_major.wav");
            s3.play();
            break;
        case("r"):
            var s4 = new Audio("piano-e_E_major.wav");
            s4.play();
            break;
        case("t"):
            var s5 = new Audio("piano-d_D_major.wav");
            s5.play();
            break;
        case("y"):
            var s6 = new Audio("piano-e_E_major.wav");
            s6.play();
            break;
        case("u"):
            var s7 = new Audio("piano-f_F_major.wav");
            s7.play();
            break;
        case("i"):
            var s8 = new Audio("piano-f_F_major.wav");
            s8.play();
            break;
        case("o"):
            var s9 = new Audio("piano-f_F_major.wav");
            s9.play();
            break;
        case("p"):
            var s10 = new Audio("piano-f_F_major.wav");
            s10.play();
            break;      



        default:
    }

}




function animation(currentKey){

    document.querySelector("."+currentKey).classList.add("active");
    setTimeout(function(){document.querySelector("."+currentKey).classList.remove("active")},100)

}