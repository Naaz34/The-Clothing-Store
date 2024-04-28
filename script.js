// Sample product data for each category
const products = [
    { category: 'Men', name: 'Men Shirt', image: 'men shirt.avif', price: 25.99 },
    { category: 'Men', name: 'Men Jeans', image: 'jeans.webp', price: 39.99 },
    { category: 'Men', name: 'Men T-Shirt', image: 't shirt.jpeg', price: 15.99 },
    { category: 'Women', name: 'Women Dress', image: 'womens_dress.jpg', price: 49.99 },
    { category: 'Women', name: 'Women Skirt', image: 'womens_skirt.jpg', price: 29.99 },
    { category: 'Women', name: 'Women Blouse', image: 'womens_blouse.jpg', price: 35.99 },
    { category: 'Kids', name: 'Kids T-Shirt', image: 'kids_tshirt.jpg', price: 12.99 },
    { category: 'Kids', name: 'Kids Jeans', image: 'kids_jeans.jpg', price: 24.99 },
    { category: 'Kids', name: 'Kids Dress', image: 'kids_dress.jpg', price: 29.99 }
];

document.getElementById('men').addEventListener('click', function() {
    displayProducts('Men');
});

document.getElementById('women').addEventListener('click', function() {
    displayProducts('Women');
});

document.getElementById('kids').addEventListener('click', function() {
    displayProducts('Kids');
});

function displayProducts(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;
        productDiv.appendChild(productImg);
        const productName = document.createElement('p');
        productName.textContent = product.name;
        productDiv.appendChild(productName);
        const productPrice = document.createElement('p');
        productPrice.classList.add('price');
        productPrice.textContent = '$' + product.price.toFixed(2);
        productDiv.appendChild(productPrice);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.classList.add('button');
        addToCartBtn.addEventListener('click', function() {
            addToCart(product);
        });
        productDiv.appendChild(addToCartBtn);
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(product) {
    // Add your cart functionality here, for example:
    alert('Added ' + product.name + ' to cart!');
}

