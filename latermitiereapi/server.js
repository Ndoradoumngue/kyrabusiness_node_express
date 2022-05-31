const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDb = require('./config/db');

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/company', require('./routes/company_route'));
app.use('/user', require('./routes/user_route'));

/*app.use('/expert/', require('./routes/expert_route'));
app.use('/expertise/', require('./routes/expertise_route'));
app.use('/user/', require('./routes/user_route'));
app.use('/service/', require('./routes/service_route'));
app.use('/testimony/', require('./routes/testimony_route'));
app.use('/membership/', require('./routes/membership_route'));
app.use('/news/', require('./routes/news_route'));*/

app.listen(port, () => console.log('app started on port '+port));
