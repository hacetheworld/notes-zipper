const express = require('express');
const notes = require("./data/notes")
const bodyParser = require('body-parser');

//Routes
const userRoutes = require("./routes/user.routes.js")
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config()
const app = express();
connectDB()
app.use(bodyParser.json());

app.use('/api/user',userRoutes)

app.use('/api/notes',(req,res)=>{
    // find all the documents in the collection
      res.json(notes);
})
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 6000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
