const fs = require('fs');

class Product {
    static productArray =[]
    constructor(id, productName, productDes, price) {
        this.id = id;
        this.productName = productName;
        this.productDes = productDes;
        this.price = price;
    }

    saveProduct() {
        Product.productArray.push(this)
       const jsonData =  JSON.stringify([...Product.productArray])
       console.log(jsonData);
       
        fs.writeFile('output.txt', jsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File has been written');
           
        });

    }
}

module.exports = Product;
