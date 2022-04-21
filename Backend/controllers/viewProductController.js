const conn = require('../dbConnection')

<<<<<<< HEAD
 /*const viewProduct = async (req, res, next) => {
    conn.execute('SELECT * FROM home_product' , function (err, product) {
        if (err) throw err;
        //return res.status(200).json({products : product})      
        else{
            res.send(JSON.stringify({status:200, err:null, response:product}))
        } 
        
    }) */
    /* conn.execute('SELECT * FROM home_product' , function (err, product) {
        if (err) throw err;
        return res.status(200).json({products : product})        
    })  
}*/

=======
>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249
const viewProduct = async (req, res) => {
    let query = "SELECT * FROM home_product";
    conn.query(query, (err, result) => {
        if (err) {
            console.log("error:", err);
            return;
        }
        res.send(result);
        console.log("products:", result);
        });
<<<<<<< HEAD
} 

module.exports = { viewProduct }
=======
}
module.exports = { viewProduct }
>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249
