 var swiper = new Swiper(".mySwiper", {
    loop:true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });

 const cartIcon = document.querySelector('.cart-icon');   
 const cartTab = document.querySelector('.cart-tab');
 const closeBtn = document.querySelector('.close-btn');
 const cartList = document.querySelector('.cart-list')

 cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'))
 closeBtn.addEventListener('click', ()=> cartTab.classList.remove('cart-tab-active'))

const cardList = document.querySelector('.card-list');

const products = [
    { id: 1, name: 'Double Beef Burger', price: 200, image: 'image/burger.png' },
    { id: 2, name: 'Cheese Pizza', price: 150, image: 'image/pizza.png' },
    { id: 3, name: 'fried-chicken', price: 80, image: 'image/fried-chicken.png' },
    { id: 4, name: 'chicken-roll', price: 120, image: 'image/chicken-roll.png' },
    { id: 5, name: 'Sub Sandwich', price: 180, image: 'image/sandwich.png' },
    { id: 6, name: 'chicken lasagna', price: 110, image: 'image/lasagna.png' },
    { id: 7, name: 'Itallian Spaghetti', price: 160, image: 'image/spaghetti.png' },
    { id: 8, name: 'spring-roll', price: 250, image: 'image/spring-roll.png' },
    // { id: 9, name: 'Chocolate Shake', price: 90, image: 'image/shake.png' }
];

function initApp() {
    // Purane content ko saaf karne ke liye taaki dubara cards na banein
    cardList.innerHTML = ''; 

    products.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('order-card');
        newDiv.innerHTML = `
            <div class="card-image">
                <img src="${value.image}" alt="${value.name}" onerror="this.src='image/burger.png'">
            </div>
            <h4>${value.name}</h4>
            <h4 class="price">$${value.price}</h4>
            <button class="btn card-btn" onclick="addToCart(${value.id})">Add to Cart</button>
        `;
        cardList.appendChild(newDiv);
        
        const cardBtn = newDiv.querySelector('.card-btn')
        cardBtn.addEventListener('click', (e)=>{
        e.preventDefault();  
            
          addToCart();
        })
    });
}

const addToCart = ()=>{
    
    const cartItem = documnet.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
    <div class="item-image">
                                <img src="image/burger.png" alt="">
                            </div>

                            <div>
                                <h4>Double Beef Burger</h4>
                                <h4 class="item-total">$200</h4>
                            </div>

                            <div class="flex">
                                <a href="#" class="quantity-btn">
                                    <i class="fa-solid fa-minus"></i>
                                </a>
                                <h4 class="quantity-value">1</h4>
                                <a href="#" class="quantity-btn">
                                    <i class="fa-solid fa-plus"></i>
                                </a>
                            </div>
    `;

    cartList.appendChild(cartItem)
}

initApp();

