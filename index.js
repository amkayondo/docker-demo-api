const express = require ("express")
const dotenv = require ("dotenv")

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "docker is running baby",
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening to PORT" + process.env.PORT);
});

