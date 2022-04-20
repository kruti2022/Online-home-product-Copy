const jwt = require('jsonwebtoken');
const conn = require('../dbConnection')

const authentication = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send({ login: false, msg: "You are not authorized for this!!!", redirect_path:"/"});
    }
    else {
        jwt.verify(token, 'the-super-strong-secrect', (err, decoded) => {
            if (err) {
                res.send({ login: false, msg: "You are not authorized for this!!!" });
               
            }
            else {
                req.userID = decoded.user_id;
                next();
            }
        })
    }
}

module.exports={authentication}