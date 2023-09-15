console.log("Hiiii>")
    document.getElementById("homenav").addEventListener("click" ,function(){
        console.log("text")
        document.querySelector(".main-home").style.display="flex";
        document.querySelector(".about").style.display="none";
        document.querySelector(".query").style.display="none";
        document.querySelector(".contactinfo").style.display="none";
        })
    document.getElementById("aboutnav").addEventListener("click" ,function(){
        document.querySelector(".main-home").style.display="none";
        document.querySelector(".about").style.display="flex";
        document.querySelector(".query").style.display="none";
        document.querySelector(".contactinfo").style.display="none";
        
        
       
    })
    document.getElementById("querynav").addEventListener("click" ,function(){
        console.log("text")
        document.querySelector(".main-home").style.display="none";
        document.querySelector(".about").style.display="none";
        document.querySelector(".query").style.display="flex";
        document.querySelector(".contactinfo").style.display="none";
       
    })
    
function closePopup() {
    document.querySelector(".popup").style.opacity = 0;
    document.querySelector(".popup").style.visibility = "hidden";
    document.querySelector(".Parent").style.display = "none";
    
}

document.getElementById("queryButton").addEventListener("click" ,function(){
    
    document.querySelector(".popup").style.visibility = "visible" ;
    document.querySelector(".Parent").style.display = "flex";
    document.querySelector(".typetext").value =' ';
    document.querySelector(".popup").style.opacity = 1;
   
})
function message(){
    const typetext=document.getElementById("typetext").value;
    const success=document.getElementById("success");
    const danger=document.getElementById("danger");

    if(typetext !== ''){
        console.log("text")
        document.querySelector(".popup").style.opacity = 0;
        document.querySelector(".danger").style.display="none";
        document.querySelector(".success").style.display="flex";
        document.querySelector(".popup").style.visibility = "hidden";
        document.querySelector(".Parent").style.display = "none";
    }else{
        console.log("text")
        document.querySelector(".danger").style.display="flex";
        document.querySelector(".success").style.display="none";
       
    }
    }
    document.getElementById("queryButton").addEventListener("click" ,function(){
        document.querySelector(".danger").style.display="none";
        document.querySelector(".success").style.display="none";
       

    })
    document.getElementById("contactnav").addEventListener("click" ,function(){
        console.log("text")
        document.querySelector(".main-home").style.display="none";
        document.querySelector(".about").style.display="none";
        document.querySelector(".query").style.display="none";
        document.querySelector(".contactinfo").style.display="flex";
    })





    

    
  
    //else{
        
      //  document.querySelector(".success").style.display= "none";
        //document.querySelector(".danger").style.display="flex";
       // document.querySelector(".popup").style.display = "flex";
        //document.querySelector(".Parent").style.display = "flex";
//}

//}
