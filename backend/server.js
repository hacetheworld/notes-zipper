const express = require('express');
const notes = require("./data/notes")
const bodyParser = require('body-parser');

//Routes
const noteRoutes =require("./routes/noteRoute");
const userRoutes = require("./routes/user.routes.js")
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const  path=require("path");

require('dotenv').config()

const app = express();
connectDB()
app.use(bodyParser.json());

app.use('/api/user',userRoutes)

app.use('/api/notes',noteRoutes)

// --------------------------deployment------------------------------
//  __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }
// --------------------------deployment------------------------------



//Error handler middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 6000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
