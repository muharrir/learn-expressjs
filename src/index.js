require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");

// app.method(path, handler)
// app.use biasa digunakan untuk proses handling middleware

/*
app.use("/", (req, res, next) => {
  res.send("Hello World");
});
*/

// MIDDLEWARE 👇
app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
