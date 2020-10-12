const mongoose = require('mongoose');

export default mongoose.model('produtos', { nome: String, preco: String, quantidade: Number });