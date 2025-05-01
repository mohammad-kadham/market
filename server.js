const PORT = process.env.PORT || 3000;
const path = require('path');
const {v1:uuidv1,v4:uuidv4} = require('uuid')
const express = require('express')
const multer = require('multer')

const routes = require('./routes/shop')
const notFoundPage = require('./routes/wrongRoute');
const bodyParser = require('body-parser');

const app = express()

const fileStorage = multer.diskStorage({destination:(req,file,cb)=>{
cb(null,'images')
},filename:(req,file,cb)=>{
  cb(null,uuidv1() + '-'+ file.originalname)
}})
const fileFilter = (req,file,cb)=>{
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    cb(null,true)
  }else{
    cb(null,false)
  }
}



app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('image'))


app.use(routes)
app.use(notFoundPage.get404Page)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });