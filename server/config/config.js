//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;

//====================
// Entorno
//====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
// Fecha Expiracion
//====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//====================
// SEED autenticacion
//====================
process.env.SEED = process.env.SEED || 'secret';

//====================
// Base de datos
//====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//====================
// Google Client ID
//====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '290889031244-i699uu93gao1v8u6j3ps4uthe14nuoqs.apps.googleusercontent.com';