const express = require("express"); 
const router = express.Router(); 
const User = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        }, {})
        res.status(201).send("New SQL User Created Successfully");
    } catch (err) {
        res.status(400).send(`Error: ${err}`);
    }
});

module.exports = router;