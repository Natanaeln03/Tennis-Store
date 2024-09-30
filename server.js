const dotenv = require('dotenv'); 

dotenv.config(); 
 
const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 

const db = require('./config/db'); 

const productRoutes = require('./routes/product');

const authRoutes = require('./routes/auth');
 
const app = express(); 

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/product', productRoutes); 

app.use('auth/', authRoutes)

app.get('/', (req, res) => {
    res.send(`Servidor está rodando na porta ${PORT}`); 
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`); 
}); 