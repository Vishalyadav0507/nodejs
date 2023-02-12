const Sequelize=require('sequelize')
const sequelize = require("../util/database");

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncreament:true,
        allowNull:false,
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
});

module.exports=User