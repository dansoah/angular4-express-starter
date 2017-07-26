import {verifyToken} from '../lib/jwt';
import Boom from 'boom';

export default function verifyJwtToken(req,res,next){
    const closeTheDoor = res.status(403).send.bind(res, {status:403, message: "unauthorized"});
    const slamTheDoor = res.status(400).send.bind(res, {status:400, message: "unauthorized"});

    if(!req.headers || !req.headers.authorization){
        return closeTheDoor();
    }

    const pieces = req.headers.authorization.split(' ');

    if(pieces.length != 2 || pieces[0] != "Bearer"){
        return closeTheDoor();
    }

    const token = pieces[1];

    verifyToken(token).then( tokenObject => {
        req.user = tokenObject;
        next();
    }, slamTheDoor)

}
