import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
