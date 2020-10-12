import server from './server';
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diego:Skate123@cluster0.ae050.gcp.mongodb.net/ts?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


server.listen(3000, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});