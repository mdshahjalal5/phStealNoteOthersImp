// ** getTheValue of products and quantity

const getValueById = id => {
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = ``;

    return inputValue
};

const buttonHandler = ()=>{
    const products = getValueById('product-field');
    const quantity = getValueById('product-quantity');

    console.log(products,quantity);
    // ** displayProducts on the ui
    displayProducts(products,quantity);

    // ** add product as key and quantity as value to the localStorage

    storeValueToLocalStorage(products,quantity);
};

// ** get the cart from localStorage

const getCartFromLocalStorage = ()=>{
    const savedCart = localStorage.getItem('cart');
    const savedCartObject = JSON.parse(savedCart);

    let cart = {};

    savedCartObject && (cart = savedCartObject );

    return cart;
}


// ** store the object value to the localStorage

const storeValueToLocalStorage = (products,quantity)=>{
    const cart = getCartFromLocalStorage();
    // ** set the key and value of the cart object

    cart[products] = quantity;

    const stringyfyCart = JSON.stringify(cart);

    // ** now save this to localStorage

    localStorage.setItem('cart', stringyfyCart)

}


const displayProducts = (products,quantity)=>{
    const productContainer = document.getElementById('products-container');

    const li = document.createElement('li');

    li.innerText = `${products} ${quantity}`

    productContainer.appendChild(li)
};

const displayProductsFromLocalStorage = ()=>{
    const cart = getCartFromLocalStorage();
    
    for (const product in cart) {
        
        const quantity = cart[product];
        displayProducts(product,quantity)
    }
};

displayProductsFromLocalStorage()

