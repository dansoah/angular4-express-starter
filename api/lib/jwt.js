import jwt from 'jsonwebtoken'

const secret = "asdasdasdasd";

/**
 * Validates if a token is a valid JWT token
 * @param {String} token - token to be verified
 * @returns {Promise}
 */
export function verifyToken(token) {
    return new Promise( (resolve, reject) => {
        jwt.verify( token,
                    secret,
                    (err, decodedToken) =>  err || !decodedToken
                                                        ? reject(err)
                                                        : resolve(decodedToken)
                  );
    });
}

export function createToken(details) {

    details = !!details ? details : {};
    details.maxAge = !details.maxAge || isNaN(parseInt(detais.maxAge)) ?
                        details.maxAge = 3600 : details.axAge;
    details.sessionData = Object.keys( details.sessionData || {} )
                                .reduce( (obj, key) => {
                                    if(key === 'password')
                                        return obj;

                                    if(typeof details.sessionData === 'function')
                                        return obj;

                                    Object.assign(obj,details.sessionData[key]);
                                    return details.sessionData;
                                }, {})

    const token = jwt.sign( { data: details.sessionData },
                            secret,
                            {
                                expiresIn: details.maxAge,
                                algorithm: 'HS256'
                            }
                         );

    return token;

}

export default {
  verifyToken,
  createToken
}
