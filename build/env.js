require('dotenv').config();


const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const tawkKey = process.env.TAWK_KEY;

console.log(`API Key: ${apiKey}`);
console.log(`Auth Domain: ${authDomain}`);
console.log(`Tawk Key: ${tawkKey}`);
