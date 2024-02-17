const salad1 = {name:"Sommarsalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: "139 kr", description: "Bra salad", img:'../Images/food-photographer-Sekm9_nC2BM-unsplash.jpg'};
const salad2 = {name:"Höstsalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: "116 kr", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " , img:"../Images/food-photographer-FtpgFeUQuAY-unsplash.jpg"};
const salad3 = {name:"Wintersalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: "89 kr", description: "Bra salad" , img:"../Images/food-photographer-zhkhwGrqilw-unsplash.jpg"};
const salad4 = {name:"Vårsalad" ,type:"salad", ingredients:[ "ris", "salad", "majs", "sås"], price: "89 kr", description: "Bra salad" , img:"../Images/food-photographer-zhkhwGrqilw-unsplash.jpg"};
const saladList = [salad1,salad2,salad3,salad4]
const mainDiv = document.getElementById("product-container");

for (const salad of saladList) {
    mainDiv.innerHTML +=`
    <div class="col shop-item">
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
                </div>
                <div>
                  <button class="btn shop-item-button m-3">Add to cart</button>
                </div>
              </div>
            </div>
  `
}






