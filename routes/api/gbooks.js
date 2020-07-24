const router = require("express").Router();
const gbooksController = require("../../controllers/gbooksController");


router.route("/:id")
  .post(gbooksController.search)
 


module.exports = router;