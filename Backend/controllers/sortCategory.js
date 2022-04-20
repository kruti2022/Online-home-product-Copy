const conn = require('../dbConnection')


exports.sortCategory = async (req, res) => {
    const category = req.params.product_category;
    console.log(category)
    if (category === "Office") {
        let sqll = `select * from home_product WHERE product_category = 'Office'`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err) 
            }
            else {
                res.send(result)
            }
        })

    }
    else if (category === 'Bedroom') {
        let sqll =  `select * from home_product WHERE product_category = "Bedroom"`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })

    }
    else if (category === 'Living') {
        let sqll =  `select * from home_product WHERE product_category = "Living"`;
        conn.query(sqll, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    }
    else if (category === 'Kitchen') {
        let sqll =  `select * from home_product WHERE product_category = "Kitchen"`;
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
