const { Op } = require("sequelize");
const express = require("express"); 
const router = express.Router(); 
const Artist = require("../models/artist");

router.post("/", async(req, res) => {
    try {
        const testing = await Artist.findAll({
            where: {
                userid: {
                    [Op.eq]: req.body.userid
                }
            }
        });
        res.status(200).json(testing);
    } catch (err) {
        res.status(400).send(`Error: ${err}`); 
    }
});

module.exports = router;