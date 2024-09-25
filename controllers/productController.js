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

const addProduct = (req, res) => {
    const {brand, size, color, price} = req.body;
    db.query(
        'INSERT INTO product (brand, size, color, price) VALUES (?,?,?,?)',
        [brand, size, color, price],
        (err,results) => {
            if(err) {
                console.error('erro ao adicionar produtos', err);
                res.status(500).send('erro ao adicionar produtos');
                return;
            }
            res.status(201).send('produtos adicionar com sucesso');
        }
    );
};

const updateProductPut = (req, res) => {
    const {id} = req.params;
    const {brand, size, color, price} = req.body;
    db.query(
        'UPDATE product SET brand=?, size=?, color=?, price=? WHERE id=?',
        [brand, size, color, price, id],
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao adiconar produto');
                return;
            }
            res.send('produto atualizado com sucesso')
        }
    );
};

const updateProductPatch = (req, res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for(const[key,value] of Object.entries(fields)) {
        query.push (`${key} = ?`);
        values.push(value);
    }
    values.push(id);

    db.query(
        `UPDATE product set ${query.join(',')} WHERE id = ?`,
        values,
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao adicionar produto');
                return;
            }
            res.send('produtos atualizado com sucesso');
        }
        
    );
};

const deleteProduct = (req,res) => {
    const{id} = req.params;
    db.query('DELETE FROM Product WHERE id = ?',[id],
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar produto', err);
                res.status(500).send('erro ao deletar produto');
                return;
            }
            res.send('produto deletado com sucesso');
        }
    );
};


module.exports = {
    getAllProduct,
    addProduct,
    updateProductPut,
    updateProductPatch,
    deleteProduct
}
