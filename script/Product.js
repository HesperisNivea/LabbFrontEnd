const salad1 = {name:"ExtraSalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 140, description: "Bra salad", img:"Images\anh-nguyen-kcA-c3f_3FE-unsplash.jpg"};
const salad2 = {name:"ExtraSalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 140, description: "Bra salad" , img:"..."};
const salad3 = {name:"ExtraSalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 140, description: "Bra salad" , img:"..."};

const saladList = [salad1,salad2,salad3]

const mainDiv = document.getElementById("product-container");

const div1 = document.createElement("div");  
div1.classList.add("col");

const div2 = document.createElement("div"); 
div2.classList.add("card");
div2.classList.add("h-100");

const img = document.createElement("img");
img.classList.add("card-img-top");

const div3 = document.createElement("div");
div3.classList.add("card-body");

const title = document.createElement("h5");
title.classList.add("card-title")

const description = document.createElement("p");
description.classList.add("card-text");

const div4Footer = document.createElement("div");  
div4Footer.classList.add("card-footer");

const price = document.createElement("small");
price.classList.add("text-body-secondary");

for (const salad of saladList) {
    mainDiv.innerHTML +=`<div class="col">
    <div class="card h-100">
      <img src="../Images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" class="card-img-top" alt="salad" />
      <div class="card-body">
        <h5 class="card-title">${salad.name}</h5>
        <p class="card-text">
          ${salad.description}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary"
          >${salad.price}</small
        >
      </div>
    </div>
  </div>`
}


for (const salad of saladList) {
    mainDiv.appendChild(div1);
    div1.appendChild(div2);
    img.src = salad.img;
    div2.appendChild(img);
    div1.appendChild(div3);
    title.innerText = salad.name;
    div3.appendChild(title);
    description.innerText = salad.description;
    div3.appendChild(description);
    div2.appendChild(div4Footer);
    price.innerText = salad.price;
    div4Footer.appendChild(price)
}




