import productAPI from "./.vscode/api.json" assert { type: "json" };
import closepopup from "./.vscode/closepoup.js";
/*const test = fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            console.log("äpi>>>>>>",test) */

document.querySelector("#closePopup1").addEventListener("click", function () {
  closepopup();
});
document.querySelector("#closePopup2").addEventListener("click", function () {
  closepopup();
});
document.getElementById("homenav").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "flex";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});
document.querySelector("#aboutnav").addEventListener("click", function () {
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "flex";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});
document.getElementById("querynav").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "flex";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});

document.getElementById("contactnav").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "flex";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});

document.getElementById("homenavPC").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "flex";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});
document.querySelector("#aboutnavPC").addEventListener("click", function () {
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "flex";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});
document.getElementById("querynavPC").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "flex";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});

document.getElementById("contactnavPC").addEventListener("click", function () {
  console.log("text");
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "flex";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "none";
});

document.getElementById("queryButton").addEventListener("click", function () {
  document.querySelector(".popup").style.visibility = "visible";
  document.querySelector(".Parent").style.display = "flex";
  document.querySelector(".typetext").value = "";
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".products").style.display = "none";
});
document.getElementById("message").addEventListener("click", function () {
  console.log("message inside")
  const typetext = document.getElementById("typetext").value;
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");
console.log("typetext",typetext)
  if (typetext !== "") {
    console.log("text1");
    document.querySelector(".popup").style.opacity = 0;
    document.querySelector(".danger").style.display = "none";
    document.querySelector(".success").style.display = "flex";
    document.querySelector(".popup").style.visibility = "hidden";
    document.querySelector(".Parent").style.display = "none";
    
  } else {
    console.log("text2");
    document.querySelector(".danger").style.display = "flex";
    document.querySelector(".success").style.display = "none";
  }
})
document.getElementById("queryButton").addEventListener("click", function () {
  document.querySelector(".danger").style.display = "none";
  document.querySelector(".success").style.display = "none";
});

const togglebutton = document.getElementById("togglebutton");
let menuOpen = false;
const navbar = document.getElementById("navbar");
document.getElementById("togglebutton").addEventListener("click", function () {
  if (!menuOpen) {
    togglebutton.classList.add("open");
    menuOpen = true;
    document.querySelector(".navbar").style.display = "flex";
  } else {
    togglebutton.classList.remove("open");
    menuOpen = false;
    document.querySelector(".navbar").style.display = "none";
  }
});
document.getElementById("mainbutton").addEventListener("click", function () {
  document.querySelector(".main-home").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".query").style.display = "none";
  document.querySelector(".contactinfo").style.display = "none";
  document.querySelector(".products").style.display = "flex";

  productAPI.map((items) => {
    document.querySelector(".products").innerHTML += `<div class="product-card">
    <div class="product-image">
      <img src="${items.image}">
    </div>
    <div class="product-info">
      <h5>${items.title}</h5>
      <h6>$${items.rating.rate}</h6>
    </div>
  </div>`;
  });
});
