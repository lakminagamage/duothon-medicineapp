const express = require('express');
const pug = require('pug');

require('dotenv').config();

const app = express();


const port = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static',express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

const admin_route = require('./server/routes/admin_route');
const ph_route = require('./server/routes/pharmacy_route');
const user_route = require('./server/routes/user_route');
const med_route = require('./server/routes/med_route');
app.use('/ph/', ph_route);
app.use('/admin/', admin_route);
app.use('/user/', user_route);
app.use('/med/', med_route);

/*app.get('/', (req, res) => {
  res.render('sample_view_2', { title: 'Hey', message: [1,2,3,4,5,6,7,8,9] });
  console.log('starting...');
});*/

app.listen(port, () => console.log('Listening on port ' + port));