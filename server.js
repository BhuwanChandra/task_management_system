const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "mongodb://localhost/taskManagement";

const router = require('./router');

const server = http.createServer(app);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.use(express.json());
app.use(cors());

// if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/client/build')));
// }

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}, visit http://localhost:${PORT}/`);
})
