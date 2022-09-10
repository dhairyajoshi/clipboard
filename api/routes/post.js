const express = require("express");
const postController = require("../controllers/postcontroller");
const router = express.Router();

router.post("/", postController.post);
router.get('/',(req,res,next)=>{
    res.send('ok')
})

module.exports=router