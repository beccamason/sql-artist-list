const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");

const Artist = sequelize.define("artist", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
        references: {
            model: "users", 
            key: "id"
        }
    }
}, {}); 

module.exports = Artist;