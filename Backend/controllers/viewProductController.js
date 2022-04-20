const conn = require('../dbConnection')

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
