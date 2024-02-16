if(document.readyState == 'loading') 
{
    document.addEventListener('DOMContentLoaded', () => {
        console.log('loading')
        ready();
    });
}else {
    ready();
}

function addElementToCart() {
    const addShopItemButton = document.getElementsByClassName('shop-item-button');
    for(var i = 0; i< addShopItemButton.length; i++) {
        const button = addShopItemButton[i];
        button.addEventListener('click',)
    }

}

function addToCart(event) {
    const buttonCliked = event.target;
    let shopItem = buttonCliked.parentElement;
    let shopItemTitle = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let shopItemPrice = shopItem.getElementsByClassName('shop-item-price')[0].innerText;

    var cartItems = document.getElementsByClassName('cart-row');
    
    
    addNewItemToCart(shopItemTitle, shopItemPrice);
    updateCartTotal();
    console.log(shopItemTitle, shopItemPrice);
    
}

function addNewItemToCart(title, price) {

    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item');
    cartItem.classList.add('cart-row');
    let cartRow = `
    <div class=" container-fluid">
                  <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-1 row-cols-xl-3 py-2">
                    <div class="row">
                      <h3 class="col cart-item-title align-bottom pt-4">${title}</h3>
                      <h4 class="col text-centercart-item-price text-end pt-4">${price}</h4>
                    </div>
                    <div class="row-cols-10 my-3 d-flex">
                      <button class=" px-2 btn-success minus-btn" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus">-</i>
                      </button>
                      <input min="0" name="quantity" value="1" type="number" class="form-control form-control-sm cart-quantity-input">
                      <button class=" px-2 btn-danger plus-btn" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus">+</i>
                      </button>
                    </div>
                    <button class="row mx-1 btn btn-success cart-button my-3">Remove</button>
                  </div>
                </div>`
    cartItem.innerHTML = cartRow;
    cartItems.append(cartItem);
    cartItem.getElementsByClassName('cart-button')[0].addEventListener('click',removeCartItem)
}
// add async to script in html
function ready() {
    
    var removeCartItemButtons = document.getElementsByClassName('cart-button');
    for (var i = 0; i< removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }   

    const addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(let i = 0; i < addToCartButtons.length; i++)
    {
        let button = addToCartButtons[i];
        button.addEventListener('click',addToCart)
        console.log('clicked')
    }
}

function removeCartItem(event)
{
    var buttonCliked = event.target;
            buttonCliked.parentElement.parentElement.parentElement.remove()
            updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i< cartRows.length; i++)
    {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace(/kr/g,''));
        var quantitty = quantityElement.value;
        total = total + (price * quantitty);
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = total + "kr";
}