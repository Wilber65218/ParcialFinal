const { Router } = require('express');
const router = Router();
    //routes
router.get('/index2', (req,res)=>{
    res.send('index');
})

module.exports= router;