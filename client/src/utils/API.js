import axios from "axios";

const BASEURL = "http://localhost:3000";
const QUERY = "/api/books";

// Export an object with a "search" method that searches the books
export default  {
  searchBooks:  function collectBooks() {
    return axios.get(BASEURL + QUERY)
      

  }
};
