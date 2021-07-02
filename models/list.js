const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");

const List = sequelize.define("list", {
    users_id:{
        type:DataTypes.INTEGER,
        references:{
            model: "users",
            key: "id"
        }
    },
    artists_id:{
        type:DataTypes.INTEGER,
        references:{
            model: "artists",
            key: "id"
        }
    }
});

module.exports = List; 