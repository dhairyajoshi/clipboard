const express = require("express");
const postController = require("../controllers/postcontroller");
const router = express.Router();

router.post("/", postController.post);
router.get('/',postController.get)

module.exports=router