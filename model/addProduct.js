const fs = require('fs');
const pathOfFile = './output.txt'
const path = require('path')
class Product {

    constructor(id, productName, productDes, price) {
        this.id = id;
        this.productName = productName;
        this.productDes = productDes;
        this.price = price;
    }

    saveProduct() {
        this.readFileFn(pathOfFile, (err, data) => {
            if (!err) {
                const productArray = JSON.parse(data)
                productArray.push(this)
                const dataString = JSON.stringify(productArray)
                fs.writeFile(pathOfFile, dataString, (err) => {
                    if (!err) {
                        console.log('file written');

                    }
                })

            }
        })

        // const jsonData = JSON.stringify([...Product.productArray])
        // console.log(jsonData);

        // fs.writeFile('output.txt', jsonData, 'utf8', (err) => {
        //     if (err) {
        //         console.error('Error writing to file:', err);
        //         return;
        //     }
        //     console.log('File has been written');

        // });

    }
   static readFileFn(path, cb) {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                console.error('didnt read file')
                cb(err, null)
                return;
            }
            cb(null, data)
        })
    }
   static fetchAllProduct(cb) {
        this.readFileFn(pathOfFile, (err, data) => {
            if (!err) {
                const products = JSON.parse(data)
                cb( products)
            }

        })
    }
}

module.exports = Product;
