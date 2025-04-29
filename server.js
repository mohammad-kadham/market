const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express')

const routes = require('./routes/shop')
const notFoundPage = require('./routes/wrongRoute');
const bodyParser = require('body-parser');

const app = express()

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))

app.use(routes)
app.use(notFoundPage.get404Page)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });