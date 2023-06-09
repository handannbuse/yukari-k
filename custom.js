var yukari=document.getElementsByClassName("yukari_cik")[0];

window.addEventListener("scroll",function(){
    const mesafe= this.window.scrollY;
    //console.log(mesafe); 
    if(mesafe>300){
        yukari.classList.add("goster");

    }
    else{
        yukari.classList.remove("goster");
    }
});
yukari.addEventListener("click",function(){
    window.scrollTo(0,0);
});
yukari.addEventListener("mousemove",function(){
    yukari.innerHTML="&uArr;";

});
yukari.addEventListener("mouseout",function(){
    yukari.innerHTML="TOP";
});