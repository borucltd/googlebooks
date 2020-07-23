const router = require("express").Router();
const bookRoutes = require("./books")
const gbookRoutes = require("./gbooks")

router.use("/books", bookRoutes)
router.use("/gbooks", gbookRoutes)

module.exports = router;