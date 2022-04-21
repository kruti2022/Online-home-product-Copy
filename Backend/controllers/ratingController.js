const conn = require('../dbConnection')

const ratings = async (req, res) => {
    const review_description = req.body.review_description;
    const review_star = req.body.review_star;
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;

    let query = "INSERT INTO `home_review`(`user_id`, `product_id`, `review_star`, `review_description`) VALUES (?, ?, ?, ?)";
    conn.query(query,[user_id, product_id, review_star, review_description], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(404).json({
                status: 0,
                message: "Not Found.",   
            });

        }
        else(null, result)
        {
            //console.log(result)
            return res.status(200).json({
                status: 1,
                message: "Successfully inserted.",
            }); 
        }
    });
}

module.exports = { ratings }