const salad0 = {
  name:"Sommarsallad" ,
  type:"Sommarsallad",
  ingredients:[ "ris", "salad", "majs", "sås"],
  price: "139 kr",
  description: "Fräsch och färgglad sommarsallad med pannerost, ägg, krispig sallad, majs, tomat och rödkål",
  img:'./Images/salads2/anh-nguyen-_Uqj5BQb-mw-unsplash-summer-sallad.jpg'};

const salad1 = {
name:"Vårsallad" ,
type:"Vårsallad", 
ingredients:[ "ris", "salad", "majs", "sås"],
price: "139 kr",
description: "Vårsallad med ris, sesam, lax, svamp, morot och bananlöv. En hälsosam och smakrik kombination!",
img:'./Images/salads2/jonathan-borba-Gkc_xM3VY34-unsplash-spring-salad.jpg'};

const salad2 = {
  name:"Höstsalad",
  type:"Höstsalad",
  ingredients:[ "ris", "salad", "majs", "sås"],
  price: "116 kr",
  description: "Höstig sallad med kyckling, chili, sallad, majs och tomat - en smakrik kombination för årstiden! " ,
  img:"./Images/salads2/food-photographer-zhkhwGrqilw-unsplash-fall-salad.jpg"};

const salad3 = {
  name:"Wintersallad",
  type:"Wintersallad",
  ingredients:[ "ris", "salad", "majs", "sås"],
  price: "145 kr",
   description: "Vintersallad med sparris, parmesan, valnötter och sallad - en symfoni av smaker. Sparrisen möter den krämiga parmesanosten, valnötterna ger textur, och salladen är som en smakrik skog.", 
  img:"./Images/salads2/carly-jayne-Lv174o7fn7Y-unsplash-winter-salad.jpg"};

const salad4 = {
name:"Proteinriksallad" ,
type:"Proteinriksallad",
ingredients:[ "ris", "salad", "majs", "sås"],
price: "150 kr",
description: "Proteinrik salladsskål med Edamame, avokado, sötpotatis, grönkål, hummus och mandlar – en kraftfull kombination för ditt välbefinnande! " ,
img:"./Images/salads2/calvin-shelwell-CW_Y16Kws20-unsplash-best-salad.jpg"};

const saladList = [salad0,salad1,salad2,salad3,salad4]
const mainDiv = document.getElementById("salad-container");

for (const salad of saladList) {
    mainDiv.innerHTML +=`
    <div class="col shop-item">
              <div class="card h-100">
                <img src="${salad.img}" class="card-img-top shop-item-image" alt="${salad.type}" />
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

const smoothie0 = {
  name:"Grön Smoothie" ,
  type:"Grön Smoothie",
  ingredients:[ "äpple", "mynta", "kiwi", "spenat", "gurka"],
  price: "89 kr",
  description: "Låt smaken av äpple och lime dansa med den gröna spenaten och den fräscha gurkan. Kiwin ger en syrlig twist, medan myntan ger en svalkande känsla.",
  img:'./Images/smoothies/smoothies2/giorgi-iremadze-3OV0ft7mG_o-unsplash-green-smoothie.jpg'};

const smoothie1 = {
name:"Drottning Smoothie" ,
type:"Drottning Smoothie", 
ingredients:[ "hallon", "blåbär"],
price: "69 kr ",
description: "Drottning Smoothie - en symfoni av smaker. De saftiga hallonen, som små rubiner, möter de mörka blåbären i en dans av antioxidanter och vitaminer. Det är som att dricka en regnbåge!",
img:'./Images/smoothies/smoothies2/arvid-skywalker-h6ccJcVHh20-unsplash-drottning-smoothie.jpg'};

const smoothie2 = {
  name:"Mango Smoothie",
  type:"Mango Smoothie",
  ingredients:[ "ris", "salad", "majs", "sås"],
  price: "59 kr",
  description: "Denna silkeslena smoothie har en ren och söt mangosmak. Den är krämig och perfekt i konsistensen, utan tillsatt socker. En hälsosam njutning som passar alla!" ,
  img:"./Images/smoothies/smoothies2/julia-zyablova-KlVIYmGVRQ8-unsplash-mango-smoothie.jpg"};


  const smoothieList = [smoothie0,smoothie1,smoothie2]
  const smoothieDiv = document.getElementById("smoothie-container");
  
  for (const smoothie of smoothieList) {
    smoothieDiv.innerHTML +=`
      <div class="col shop-item">
                <div class="card h-100">
                  <img src="${smoothie.img}" class="card-img-top shop-item-image" alt="${smoothie.type}" />
                  <div class="card-body">
                    <div class="d-flex" style="justify-content: space-between;"> <!--remove style and add it to css file-->
                      <h4 class="card-title shop-item-title">${smoothie.name}</h4>
                      <h5 class="card-title text-end shop-item-price">${smoothie.price}</h5>
                    </div>
                    <p class="card-text">
                    ${smoothie.description}
                    </p>
                  </div>
                  <div>
                    <button class="btn shop-item-button m-3">Add to cart</button>
                  </div>
                </div>
              </div>
    `
  }

