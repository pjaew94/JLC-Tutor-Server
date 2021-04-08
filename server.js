const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors());

const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/subjects", require("./routes/api/subjects"));



  const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
