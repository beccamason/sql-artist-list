const express = require("express"); 
const User = require("../models/user");
const router = express.Router(); 

router.get("/", async(req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
});

module.exports = router; 