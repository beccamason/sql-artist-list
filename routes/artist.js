const express = require("express"); 
const router = express.Router(); 
const Artist = require("../models/artist");

router.post("/", async (req, res) => {
    try {
        const artist = await Artist.create({
            name: req.body.name, 
            userid: req.body.userid
        }, {})
        res.status(201).send("New SQL Artist Created Successfully");
    } catch (err) {
        res.status(400).send(`Error: ${err}`);
    }
});

module.exports = router;