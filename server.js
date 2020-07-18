
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes");

// DB parameters
const PORT = process.env.PORT || 3001
const MONGODB_NAME = "googlebooks"
const MONGO_URL = process.env.MONGODB_URI || `mongodb://localhost/${MONGODB_NAME}`
const MONGO_OPTIONS = {
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useUnifiedTopology:true   
}

// Express middlewares
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose.connect(MONGO_URL,MONGO_OPTIONS)
.then(() => {
  console.log('Database connection successful')
  // Start backend API server
  app.listen(PORT, () => {
    console.log(`Backend API server listening on port ${PORT}!`);
  });
})
.catch(err => {
  console.log(`Database connection error:` + err)
})

