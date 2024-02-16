const salad1 = {name:"Sommarsalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 139, description: "Bra salad", img:'../Images/food-photographer-Sekm9_nC2BM-unsplash.jpg'};
const salad2 = {name:"Höstsalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 116, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " , img:"../Images/food-photographer-FtpgFeUQuAY-unsplash.jpg"};
const salad3 = {name:"Wintersalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: 89, description: "Bra salad" , img:"../Images/food-photographer-zhkhwGrqilw-unsplash.jpg"};

const saladList = [salad1,salad2,salad3]

const mainDiv = document.getElementById("product-container");

// const div1 = document.createElement("div");  
// div1.classList.add("col");

// const div2 = document.createElement("div"); 
// div2.classList.add("card");
// div2.classList.add("h-100");

// const img = document.createElement("img");
// img.classList.add("card-img-top");

// const div3 = document.createElement("div");
// div3.classList.add("card-body");

// const title = document.createElement("h5");
// title.classList.add("card-title")

// const description = document.createElement("p");
// description.classList.add("card-text");

// const div4Footer = document.createElement("div");  
// div4Footer.classList.add("card-footer");

// const price = document.createElement("small");
// price.classList.add("text-body-secondary");

for (const salad of saladList) {
    mainDiv.innerHTML +=`<div class="col shop-item">
    <div class="card h-100">
      <img src="${salad.img}" class="card-img-top shop-item-image" alt="salad" />
      <div class="card-body">
        <div class="d-flex" style="justify-content: space-between;"> <!--remove style and add it to css file-->
          <h4 class="card-title shop-item-title">${salad.name}</h4>
          <h5 class="card-title text-end shop-item-price">${salad.price}</h5>
        </div>
        <p class="card-text">
         ${salad.description}
        </p>
        <button class="btn btn-success shop-item-button">Add to cart</button>
      </div>
    </div>
  </div>`
}

// const ex = []
// for (const salad of ex) {
//     mainDiv.appendChild(div1);
//     div1.appendChild(div2);
//     img.src = salad.img;
//     div2.appendChild(img);
//     div1.appendChild(div3);
//     title.innerText = salad.name;
//     div3.appendChild(title);
//     description.innerText = salad.description;
//     div3.appendChild(description);
//     div2.appendChild(div4Footer);
//     price.innerText = salad.price;
//     div4Footer.appendChild(price)
// }




