const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize('db', null, null, {
	dialect: 'sqlite',
	operatorsAliases: Op,
	logging: false,
	storage: '../gtfs.sqlite'
});
const port = process.env.PORT || 5000;

var sqlQuery = "SELECT * FROM stop_times WHERE stop_id = 772 AND " +
 "arrival_time > strftime('%H:%M:%S', 'now', 'localtime', '+3 minutes') " +
 "ORDER BY arrival_time LIMIT 10;"
var stops = sequelize.query(sqlQuery, {
	 raw: true 
 });
 
 //.then(function(row){stops.push(row);console.log(stops);});
 



app.get('/api/hello', (req, res) => {
  res.send({ express: stops, msg: 'hi' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));