const jwt = require('jsonwebtoken');
const conn = require('../dbConnection')

exports.getUser = async (req,res,next) => {
    try{

        if(
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ){
            return res.status(422).json({
                message: "Please provide the token",
            });
        }

        
        const theToken = req.headers.authorization.split(' ')[1];
        console.log(theToken)
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
        console.log(decoded)
        console.log(decoded.user_id)
        const ID=decoded.user_id

         conn.execute('SELECT * FROM `home_user` WHERE user_id="' + ID + '"',function (err, result){
                if (err)
                {
                    console.log(err)
                    return res.status(400).json({ status: 0, message: "error" })

                }
              else{
            return res.status(200).json({result : result}) 
          } 
        })
        
    }
    catch(err){
        next(err);

    }
     
}