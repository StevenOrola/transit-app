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

var StopTimes = sequelize.define('stop_times', {
	trip_id: Sequelize.TEXT,
	arrival_time: Sequelize.TEXT,
	departure_time: Sequelize.TEXT,
	stop_id: Sequelize.TEXT,
	stop_sequence: Sequelize.INTEGER,
	stop_headsign: Sequelize.TEXT,
	pickup_type: Sequelize.INTEGER, 
	drop_off_type: Sequelize.INTEGER, 
	shape_dist_traveled: Sequelize.REAL 
});

//sequelize.sync({force: true}).then(function(err) {console.log('worked');}, function(err) {console.log('error while creating');});
	
//StopTimes.findAll({ raw: true}).then(function(users) {console.log(users);});
	
var sqlQuery = "SELECT * FROM stop_times WHERE stop_id = 772 AND " +
 "arrival_time > strftime('%H:%M:%S', 'now', 'localtime', '+3 minutes') " +
 "ORDER BY arrival_time LIMIT 10;"
 var stopsA = [];
 var stopsB;
 var stopsC;
var stops = sequelize.query(sqlQuery, {
	 raw: true 
 }).spread((results, metadata) => {
	stopsA.push(results);
	stopsB = stopsA[0];
	stopsC = stopsB[1];
 });
 
 
 
 //.then(function(row){stopsA.push(row);console.log(stopsA);});
 
//console.log(StopTimes);

app.get('/api/hello', (req, res) => {
  res.send({ express: stopsB, msg: 'hi' });
  //res.send({express: JSON.stringify(stopsC), msg: 'hi'})
  //res.send(JSON.stringify(stopsC));
  });

app.listen(port, () => console.log(`Listening on port ${port}`));