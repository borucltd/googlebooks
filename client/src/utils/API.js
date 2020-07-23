import axios from "axios";

// apis calls
export default  {
  searchBooks:  function() {
    return axios.get("/api/books")
  }, 
  deleteBook:   function(id) {
    return  axios.delete("/api/books/" + id);
  },
  searchGBooks: function(id) {
    console.log("looking for " +id)
    return axios.post("/api/gbooks/" + id);
  }
};
