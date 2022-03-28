const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

const sortMiddleware = require('./app/middlewares/sortMiddleware');

const app = express();
const port = 3000;

const router = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
// Connect to db

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());


app.use(methodOverride("_method"))

app.use(sortMiddleware);

// Template engine
app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		helpers: require('./helpers/handlebars')
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// HTTP Logger
// app.use(morgan("combined"));

router(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
