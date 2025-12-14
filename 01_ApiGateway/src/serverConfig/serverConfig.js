const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    FORTEND_URL: process.env.FORTEND_URL,
    ECOMMERCE_BACKEND_URL: process.env.ECOMMERCE_BACKEND_URL,
    PAYMENT_BACKEND_URL: process.env.PAYMENT_BACKEND_URL,
}