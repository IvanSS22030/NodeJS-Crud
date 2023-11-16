const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN)

        console.log("DB online");

    } catch (error) {
        console.error("Error during database connection:", error);
        throw new Error("Error al inicializar DB");
    }
}

module.exports = {
    dbConnection
};
