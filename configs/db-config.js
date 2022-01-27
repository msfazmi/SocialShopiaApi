const mongoose = require('mongoose');

const dbConnection = () => {
    const dbUrl = "mongodb://localhost:27017/farooquiherbal";
    mongoose.connect(dbUrl)
        .then(() => console.log('Database Connection Success'))
        .catch((err) => console.log('Connection With Databse Failed. Reason ' + err.message));
}

module.exports = dbConnection();