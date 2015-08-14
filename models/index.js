var Sequelize = require('sequelize');
var logger = require('../utils/logger.js');
var config = require('../config.json');
var models = module.exports = {};

var sqlLog = function (content) {
	logger.debug(content);
};

var sequelize = new Sequelize('yliyun', config.mysql.username, config.mysql.password, {
	host: config.mysql.host,
	port: 3306,
	dialect: 'mysql',
	//omitNull: true,
	timezone: '+08:00',
	logging: sqlLog,
	pool: {
		max: 40,
		min: 0,
		idle: 10
	}
});

models.sequelize = sequelize;
models.Sequence = sequelize.import('./Sequence.js');
