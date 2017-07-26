import express from 'express';
import jwtValidate from '../middlewares/jwt-validate';
import { createToken } from '../lib/jwt';
import { authenticate } from '../services/authentication';

const router = express.Router();

router.get('/', (req,res) => {
    res.send({isRunning:true});
})

router.get('/teste', jwtValidate, (req,res) => {
    res.send({isTesting:true});
})

router.post('/authenticate', (req,res) => {
    let { email, password } = req.body;
    const closeTheDoor = res
                            .status(401)
                            .send
                            .bind(res, {
                                status: 401,
                                message: 'Wrong email/password'
                            });

    authenticate(email,password).then( userInfo => {
        let token = createToken({sessionData: userInfo});
        res.send({status:200, data:token})
    }, () => {
        closeTheDoor()
    })
})

export default router;
