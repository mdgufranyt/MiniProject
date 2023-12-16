try {
    if (localStorage.getItem('CartBox').length > 0) {
        if (localStorage.getItem('CartBoxquant') == null) {
            localStorage.setItem('CartBoxquant', 1)
        }
        document.querySelector('.yourCart').innerHTML =
            `
        <div class="Items">
            <div class="itemdetail">
                <div class="itemimg">
                    <img src="photos/${localStorage.getItem('CartBoxImages')}" alt="Headphone">
                </div>
                <div class="iteminfo">
                    <div class="h2"><h2>${localStorage.getItem('CartBox')}</h2></div>
                    <div class="h2">Seller: BOOMBOX</div>
                    <h3>
                        <div class="h4 MainPrice">$${localStorage.getItem('CartBoxPrices')} <span class="h6" style="color:green;font-size: 12px;">72% off</span></div>
                    </h3>
                    <div class="delstatus">Delivery by Wed Dec 20 | <span class="h6" style="color:green;font-size: 15px;padding-top:10px">Free</span>
                </div>
                <div class="Cart_items">
                    <div class="nZz3kj _1hNI6F"><div class="_1uc2IE"><div class="_3dY_ZR"><button class="_23FHuj" > – </button><div class="_26HdzL"><input type="text" class="_253qQJ" value=${localStorage.getItem('CartBoxquant')}></div><button class="_23FHuj"> + </button></div></div><div class="_10vWcL td-FUv WDiNrH"><div class="_3dsJAO">Save for later</div><div class="_3dsJAO">Remove</div></div></div>
                </div>
            </div>
        </div>
        <a href="#"><button class="h2 order" style="color:black;background:green;padding:10px;width: 100%;margin-top: 55px;">
            Place Order
        </button></a>
        `
        document.querySelectorAll('._3dsJAO')[1].addEventListener('click',()=>{
            console.log("Remove the element");
            localStorage.removeItem('CartBox');
            window.location.reload();
        })
        document.querySelectorAll('._23FHuj')[1].addEventListener('click', () => {
            document.querySelector('._253qQJ').value = parseInt(document.querySelector('._253qQJ').value) + 1;
            localStorage.setItem('CartBoxPrices', `${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 2}`);
            document.querySelector('.MainPrice').innerHTML = `$${localStorage.getItem('CartBoxPrices')} <span class="h6" style="color:green;font-size: 12px;">72% off</span>`
            localStorage.setItem('CartBoxquant', document.querySelector('._253qQJ').value);
            document.querySelector('.priceDetailItem').innerHTML = `<div class="h1">Price (${localStorage.getItem('CartBoxquant')} item): $${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) + parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Discount : -${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Delivery Charges: <span class="h6" style="color:green;font-size: 15px;">Free</span> </div><div class="priceHead" style="border-bottom: 1px solid white;border-Top: 1px solid white;padding: 10px;color: white;font-size: 20px;">Total Price: $${localStorage.getItem('CartBoxPrices')}</div>`
        })
        document.querySelectorAll('._23FHuj')[0].addEventListener('click', () => {
            if (parseInt(document.querySelector('._253qQJ').value) > 1) {
                document.querySelector('._253qQJ').value = parseInt(document.querySelector('._253qQJ').value) - 1;
                localStorage.setItem('CartBoxPrices', `${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) / 2}`);
                document.querySelector('.MainPrice').innerHTML = `$${localStorage.getItem('CartBoxPrices')} <span class="h6" style="color:green;font-size: 12px;">72% off</span>`
                localStorage.setItem('CartBoxquant', document.querySelector('._253qQJ').value);
                document.querySelector('.priceDetailItem').innerHTML = `<div class="h1">Price (${localStorage.getItem('CartBoxquant')} item): $${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) + parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Discount : -${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Delivery Charges: <span class="h6" style="color:green;font-size: 15px;">Free</span> </div><div class="priceHead" style="border-bottom: 1px solid white;border-Top: 1px solid white;padding: 10px;color: white;font-size: 20px;">Total Price: $${localStorage.getItem('CartBoxPrices')}</div>`
            }
        })
        document.querySelector('.priceDetailItem').innerHTML = `<div class="h1">Price (${localStorage.getItem('CartBoxquant')} item): $${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) + parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Discount : -${parseInt(localStorage.getItem('CartBoxPrices').replace('k', '')) * 0.72}</div><div class="h1">Delivery Charges: <span class="h6" style="color:green;font-size: 15px;">Free</span> </div><div class="priceHead" style="border-bottom: 1px solid white;border-Top: 1px solid white;padding: 10px;color: white;font-size: 20px;">Total Price: $${localStorage.getItem('CartBoxPrices')}</div>`

    }
    else {
        console.log("No element found");
        document.querySelector('.yourCart').innerHTML =
            `
        <h1 class="EmptyMsg">
            Cart is empty
        </h1>
        `
    }
    
} catch (error) {
    console.log("No element found");
    document.querySelector('.yourCart').innerHTML =
        `
    <h1 class="EmptyMsg">
        Cart is empty
    </h1>
    `
}
