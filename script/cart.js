if(document.readyState == 'loading') 
{
    document.addEventListener('DOMContentLoaded')
}else {
    ready();
}

// add async to script in html
function ready() {
    
    var removeCartItemButton = document.getElementsByClassName('cart-button')
    for (var i = 0; i< removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }   
}

function removeCartItem(event)
{
    var buttonCliked = event.target;
            buttonCliked.parentElement.remove()
            updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i< cartRows.length; i++)
    {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('kr',''));
        var quantitty = quantityElement.value;
        total = total + (price * quantitty);
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'kr'
}