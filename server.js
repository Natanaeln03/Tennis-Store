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

app.use('/api/product', productRoutes); 

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {

});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`); 
}); 