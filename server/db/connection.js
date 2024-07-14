const mongoose = require('mongoose');

const url = `mongodb+srv://aguptaworkspace:m20sAkhJMGXgdqQ2@cluster0.wuerrm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))