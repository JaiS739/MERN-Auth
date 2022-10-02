const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connection = require("./config/db");
const userRouter = require("./routes/userRoutes");
const customerRouter = require("./routes/customerRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const port = 5100;

app.use("/user", userRouter);
app.use("/customer", customerRouter);

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }
  console.log(`listening on port ${port}`);
});
