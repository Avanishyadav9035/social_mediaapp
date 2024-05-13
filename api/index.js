const express = require('express');
const mongoose = require('mongoose');
const app = express()
const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/posts.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


mongoose.connect()
.then(() => {
  console.log("connected to database!");
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  
})
.catch(() => {
  console.log("Connection failed!");
});
