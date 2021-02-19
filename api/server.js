const express = require("express");
const cors = require("cors")
const helmet = require('helmet')
// const friendsRouter = require("./friends/friends-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());


// server.use("/api/friends", friendsRouter)
server.get("/", (req, res) => {
    res.json({
        message: "Your api is up and running, get to work"
    })
})


module.exports = server
