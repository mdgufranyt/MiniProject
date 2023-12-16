
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }

        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom-200;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementTop < viewportHeight && elementBottom > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }

        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom-200;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementTop < viewportHeight && elementBottom > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }

        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom-200;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementTop < viewportHeight && elementBottom > 0) {
            
            reveals[i].classList.add("active");

        } else {
            reveals[i].classList.remove("active");
        }
    }
}
const producthoverColor = document.querySelectorAll('.product-list .product-pic img');
const products = document.querySelectorAll('.product-list');
const productinfo = document.querySelectorAll('.product-info img');
products.forEach((x,i)=>{
    x.addEventListener('mouseover',()=>{
        x.style = `background:${producthoverColor[i].alt.split("-")[0]};`;
        productinfo[i].style = `background:${producthoverColor[i].alt.split("-")[0]};`;
    })
    x.addEventListener('mouseout',()=>{
        x.style = `background:#1e1e21;box-shadow: 1px 0px 12px ${producthoverColor[i].alt.split("-")[0]};`;
        productinfo[i].style = 'background:black;';
    })
    x.style = `box-shadow: 1px 0px 12px ${producthoverColor[i].alt.split("-")[0]};`

})
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
