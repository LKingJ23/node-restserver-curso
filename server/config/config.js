//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;

//====================
// Puerto
//====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
// Base de datos
//====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = "mongodb+srv://LKingJ23:KHPwASZbd8re2zYY@cluster0-jemlx.mongodb.net/cafe";
}

process.env.URLDB = urlDB;