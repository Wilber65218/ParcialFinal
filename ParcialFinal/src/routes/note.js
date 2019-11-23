const { Router } = require('express');
const router= Router();

router.get('/notes/new-buys',(req,res)=>{
    res.send('conectando a la base de datos');
})
module.exports=router;