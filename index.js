const { Sequelize, DataTypes, Op } = require("sequelize"); 
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");
const express = require("express"); 
const registerRouter = require("./routes/register");
const userRouter = require("./routes/users");
const artistRouter = require("./routes/artist");
const listRouter = require("./routes/mylist");
const app = express()


const server = app.listen(5000, async() => {
    //app.listen returns an object - the running server object - which we store in 'server' 
    await sequelize.authenticate();
    await sequelize.sync();
});

const shutdown = () => {
    console.info(`SIGTERM signal received`);
    console.log(`Closing http server`);
    server.close(async () => {
        console.log(`HTTP server closed.`);
        await sequelize.close();
    });
};

process.on('SIGTERM', shutdown); //signal terminate
process.on('SIGINT', shutdown); //signal interrupt 
//event driven - process is an object that always exists when running node
//these SIG terms are for windows and mac

app.use(express.json());
app.use("/register", registerRouter);
app.use("/users", userRouter); 
app.use("/artist", artistRouter);
app.use("/mylist", listRouter);

// const run = async () => {
//     try {
//         await sequelize.authenticate();
//         await sequelize.sync();

//         const becca = await User.create({
//             name: "Becca",
//             email: "becca@mail.com",
//             password: "bexrox"
//         });
//         const klein = await Artist.create({
//             name: "Yves Klein", 
//             userid: becca.id
//         });

//     } catch (err) {
//         console.log(err);
//     }
// }

// run();