const axios = require("axios");

const gkey=process.env.KEY || "AIzaSyBjShsAYMc2YiQie3Gn7Hug3DR7hqvw4DM"
//const gurl=process.env.GKEY || "https://www.googleapis.com/books/v1/volumes"
//GET https://www.googleapis.com/books/v1/volumes?q=search+terms
//GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
module.exports = {
  search: async function(req,res) {

   const gurl = `https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&key=AIzaSyBjShsAYMc2YiQie3Gn7Hug3DR7hqvw4DM`
   try {
    const response = await axios.get(gurl)
    console.log(response.data)
    res.json(response.data)
   } catch (error) {
       console.log(error)
   }
}
};
