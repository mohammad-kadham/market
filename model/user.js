const fs = require('fs')
const { v1: uuidv1, v4: uuidv4 } = require('uuid')

const pathOfFile = './users.txt'
const path = require('path');

class User {
    constructor(name,email,password,id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuidv4()
    }

    addUser(cb){
        let userArray=[]
        userArray.push(this)
        const jsonData = JSON.stringify(userArray)
        fs.writeFile(pathOfFile,jsonData,(err)=>{
            if (!err){
                console.log('user saved');
                cb()
            }
        })
    }

    static findUser(cb,email){
        fs.readFile(pathOfFile,'utf-8',(err,data)=>{
            if (!err) {
             const  jsonData =  JSON.parse(data)
             
             
                   jsonData.forEach(user => {
                    if(user.email === email){
                       
                        
                        cb(user)  
                    }
                   });      
              
            }
        })
    }
}


module.exports= User;