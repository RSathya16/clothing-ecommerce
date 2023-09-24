console.log("Hiiii>")
    document.getElementById("homenav").addEventListener("click" ,function(){
        console.log("text")
        document.querySelector(".success").style.display="none";
        document.querySelector(".main-home").style.display="flex";
        document.querySelector(".about").style.display="none";
        document.querySelector(".query").style.display="none";
        document.querySelector(".contactinfo").style.display="none";
        })
    document.getElementById("aboutnav").addEventListener("click" ,function(){
        document.querySelector(".success").style.display="none";
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
    document.querySelector(".popup-box").style.opacity = 0;
    document.querySelector(".popup-box").style.display = "none";
    document.querySelector(".Parent").style.display = "none";
    
}

document.getElementById("queryButton").addEventListener("click" ,function(){
    
    document.querySelector(".popup-box").style.display = "block" ;
    document.querySelector(".Parent").style.display = "block";
    document.querySelector(".typetext").value ='';
    document.querySelector(".popup-box").style.opacity = 1;
   
})
function message(){
    const typetext=document.getElementById("typetext").value;
    const success=document.getElementById("success");
    const danger=document.getElementById("danger");
    
    if(typetext !== ''){
        console.log("text1")
        document.querySelector(".popup-box").style.opacity = 0;
        document.querySelector(".danger").style.display="none";
        document.querySelector(".success").style.display="flex";
        document.querySelector(".popup-box").style.display = "none";
        document.querySelector(".Parent").style.display = "none";
    }else{
        console.log("text2")
        document.querySelector(".danger").style.display="flex";
        document.querySelector(".success").style.display="none";
       
    }
    }
    document.getElementById("queryButton").addEventListener("click" ,function(){
        document.querySelector(".danger").style.display="none";
        document.querySelector(".success").style.display="none";
       

    })
    document.getElementById("contactnav").addEventListener("click" ,function(){
        document.querySelector(".success").style.display="none";
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
