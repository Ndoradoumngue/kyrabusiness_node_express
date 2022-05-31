const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDb = require('./config/db');

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/blog/', require('./routes/blog_route'));
app.use('/category/', require('./routes/category_route'));
app.use('/company', require('./routes/company_route'));
app.use('/country', require('./routes/country_route'));
app.use('/product', require('./routes/product_route'));
app.use('/service/', require('./routes/service_route'));
app.use('/town/', require('./routes/town_route'));
app.use('/user', require('./routes/user_route'));
app.use('/user-account/', require('./routes/user_account'));

app.listen(port, () => console.log('app started on port '+port));
