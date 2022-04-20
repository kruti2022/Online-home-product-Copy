const conn = require('../dbConnection')


exports.sortPrice = async (req, res) => {
    const price = req.params.product_price;
    if (price === '1000') {
        let sqll = `select * from home_product WHERE product_price <= 1000`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (price === '1000_5000') {
        let sqll = `select * from home_product WHERE product_price >=1000 && product_price <= 5000`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (price === '5000') {
        let sqll = `select * from home_product WHERE product_price >= 5000`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    }
    
}
