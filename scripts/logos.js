const logo = [{
    image: 'arcanum logos/ARCANUM LOGO2.gif',
    name: 'Tech Logo',
    price: 7
}, {
    image: 'arcanum logos/ARCANUM GIF 2.gif',
    name: 'Tech Logo 2',
    price: 7
}, {
    image: 'arcanum logos/ARCANUM GIF 4.gif',
    name: 'Simple Logo',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 5.gif',
    name: 'Simple Logo 2',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 6.gif',
    name: 'Simple Logo 3',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 7.gif',
    name: 'Simple Logo 4',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 8.gif',
    name: 'Simple Logo 5',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 9.gif',
    name: 'Tech Logo 3',
    price: 8
}, {
    image: 'arcanum logos/ARCANUM GIF 10.gif',
    name: 'Sliding Logo',
    price: 7
}, {
    image: 'arcanum logos/ARCANUM GIF 11.gif',
    name: 'Simple Logo 6',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 12.gif',
    name: 'Simple Logo 7',
    price: 5
}, {
    image: 'arcanum logos/ARCANUM GIF 13.gif',
    name: 'Restaurant Logo',
    price: 9
}, {
    image: 'arcanum logos/ARCANUM GIF 14.gif',
    name: 'Content Logo',
    price: 9
}, {
    image: 'arcanum logos/ARCANUM GIF 15.gif',
    name: 'Gaming Logo',
    price: 9
}, {
    image: 'arcanum logos/ARCANUM GIF 16.gif',
    name: 'Simple Logo 8',
    price: 6
}, {
    image: 'arcanum logos/ARCANUM GIF 17.gif',
    name: 'Simple Logo 9',
    price: 6
}];

let logoHTML = '';

logo.forEach((logo) => {
    logoHTML += `   <div class="items">
            <img class="logo-gif" src="${logo.image}" alt="">
            <p class="items-text">${logo.name}</p>
            <p class="items-text-2"> ${logo.price}$</p>
            <div class="buy-button-box">
                <button class="buy-button js-buy-button" data-logo-name="${logo.name}">Order</button>
            </div>
        </div>
    `
});

document.querySelector('.js-items-grid-1').innerHTML = logoHTML;

document.querySelectorAll('.js-buy-button').forEach((button) => {
    button.addEventListener('click', () => {
        const logoName = button.dataset.logoName;  //<<The 'dataset' function is to access the data tied to the button.'logoName'is to specify
        
        let matchingItem = '';

        cart.forEach((item) => {
            if (logoName === item.logoName) {
                matchingItem = item           //<<This code is for checking if the item we are selecting is already in the cart
            }
        });

        if (matchingItem) {
            alert('Already Added');
            return 1
        } else {
            cart.push({
                logoName: logoName,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
});