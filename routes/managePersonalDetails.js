const router = require("express").Router();

router.get("/managePersonalDetails", isLoggedIn, function (req, res) {
    res.render("ManagePersonalDetails/index");
});
module.exports = router;