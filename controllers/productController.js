const db = require('../config/db'); 


const getAllProduct = (req, res) => {
    db.query('select * from product', (err, results) => {
        if(err){
            console.error('Erro ao obter produto:', err)
            res.status(500).send('Erro ao obter produto');
            return;
        }
        res.json(results);
    });
};

module.exports = {
    getAllProduct
}