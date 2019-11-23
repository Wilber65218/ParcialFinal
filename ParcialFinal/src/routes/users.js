const { Router } = require('express');
const router = Router();

//routes
router.get('/signin',(req, res)=>{
    res.send('ingresando a la app');
});
router.get('/sinup',(req, res)=>{
    res.send('formulario de autenticacion');
})
module.exports = router;