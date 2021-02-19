require("dotenv").config()

const server = require("./api/server")

const port = process.env.PORT || 8500;
server.listen(port, () => console.log(`\n** You are running on ${port} **\n`))
