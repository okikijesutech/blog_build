const express = require("express");

const user = require("./routes/user.router");

const app = express();
const port = 5000;

app.use("/", user);
app.listen(port, () => console.log(`server running ${port}`));
