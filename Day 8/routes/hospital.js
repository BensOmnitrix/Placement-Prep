const express = require("express");
const router = express.Router();

const {
    kidneyInfo,
    addKidney,replaceKidney,deleteKidney
} = require('../controllers/hospital');

router.route("/kidney_info").get(kidneyInfo);

router.route("/add_kidney").post(addKidney);

router.route("/:replacePos").put(replaceKidney);

router.route("/delete_kidney").delete(deleteKidney);

module.exports = router