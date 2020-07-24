import axios from "axios";

// apis calls
export default  {
  searchBooks:  function() {
    return axios.get("/api/books")
  },
  saveBook: function(book) {
    return axios.post("/api/books/",book);
  }, 
  deleteBook:   function(id) {
    return  axios.delete("/api/books/" + id);
  },
  searchGBooks: function(id) {
    return axios.post("/api/gbooks/" + id);
  }  
};
