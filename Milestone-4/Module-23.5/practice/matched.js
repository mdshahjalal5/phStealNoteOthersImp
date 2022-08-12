// ** searching a string 

const products = [
    {id: 1, name: 'xiami phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung Phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age Phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
    {id: 8, name: 'M1 chip not cheap LapTOP', price: 19000},
];


// ** Searching phones from a productlist

const productsListSearch = (products,search) => {

    const phones = [];

    for (const product of products) {
        
        product.name.toLowerCase().includes(search.toLowerCase()) && phones.push(product);
    }

    return phones;
}

console.log(productsListSearch(products,'laptop'));
console.log(productsListSearch(products,'phone'));