const conn = require('../dbConnection')

const singleProduct = async (req, res) => {
    const product_id = req.params.product_id
    let sqll = `select * from home_product where product_id=${product_id}`;
    conn.query(sqll, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })

}
module.exports = { singleProduct }  

