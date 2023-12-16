const CartBox = localStorage.getItem('CartBox');
if (CartBox != null){
    if (localStorage.getItem('CartBox').length > 0) {
        document.querySelector('#addtoCart').outerHTML =
            `<button id="addtoCart">
            <div class="shopping-bag">
                <img src="./icons/shoppingBag.png" alt="shoppingbag-logo">
                <p>Added to Bag</p>
            </div>
        </button>`
    }
}

document.querySelector('#addtoCart').addEventListener('click', () => {
    localStorage.setItem('CartBox', 'Boom3');
    localStorage.setItem('CartBoxImages', 'mainImage.png');
    localStorage.setItem('CartBoxPrices', '399k');
    localStorage.setItem('CartBoxquant', '1');
    if (localStorage.getItem('CartBox').length > 0) {
        document.querySelector('#addtoCart').outerHTML =
            `<button id="addtoCart">
            <div class="shopping-bag">
                <img src="./icons/shoppingBag.png" alt="shoppingbag-logo">
                <p>Added to Bag</p>
            </div>
        </button>`
    }
})

