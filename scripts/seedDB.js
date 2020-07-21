const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below
// parameters
const PORT = process.env.PORT || 3001
const MONGODB_NAME = "googlebooks"
const MONGO_URL = process.env.MONGODB_URI || `mongodb://localhost/${MONGODB_NAME}`
const MONGO_OPTIONS = {
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useUnifiedTopology:true   
}

mongoose.connect(MONGO_URL,MONGO_OPTIONS);

const bookSeed = [
  {
    authors: ["Olisadebe Collins", "Mariusz B"],    
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "https://qph.fs.quoracdn.net/main-qimg-96e4fd334a73784d16842e477422e0c5",
    link: "link to the book",
    title: "Hello World"
  },
  {
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "https://qph.fs.quoracdn.net/main-qimg-96e4fd334a73784d16842e477422e0c5",
    link: "link to the book",
    title: "Hello World"
  },
  {
    authors: ["Suzanne Joints"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "https://qph.fs.quoracdn.net/main-qimg-96e4fd334a73784d16842e477422e0c5",
    link: "link to the book",
    title: "Hello World"
  }
];

db.Books.deleteMany({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
