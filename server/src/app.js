const express = require("express");
// const cors = require("cors");

const user = require("./routes/user.router");

const app = express();
const port = 5000;
// const corsOptions = {
//   origin: "*",
// };

// app.use(cors(corsOptions));

app.use("/", user);
app.listen(port, () => console.log(`server running ${port}`));
