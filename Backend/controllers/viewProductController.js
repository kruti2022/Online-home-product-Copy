const conn = require('../dbConnection')

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

} 

module.exports = { viewProduct }