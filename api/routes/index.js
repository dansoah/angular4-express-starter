import express from 'express';
import jwtValidate from '../middlewares/jwt-validate';

const router = express.Router();

router.get('/', (req,res) => {
    res.send({isRunning:true});
})

router.get('/teste', jwtValidate, (req,res) => {
    res.send({isRunning:true});
})

export default router;
