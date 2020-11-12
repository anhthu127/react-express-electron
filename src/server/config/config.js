const Sequelize = require('sequelize');
let db_config = {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '111111',
    database: process.env.DB_DATABASE || 'project3',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: true,
    logging: console.log,
    pool: {
        max: 10, min: 0, idle: 1000
    }
}
export default new Sequelize(db_config); 
