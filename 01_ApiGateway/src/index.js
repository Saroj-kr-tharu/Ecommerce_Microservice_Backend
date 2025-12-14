const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { default: rateLimit } = require("express-rate-limit");
const cors = require("cors");

const {  FORTEND_URL, ECOMMERCE_BACKEND_URL, PAYMENT_BACKEND_URL } = require("./serverConfig/serverConfig");

const app = express();
const PORT = 3001;

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 50,
});

app.use(morgan("combined"));
app.use(limiter);




app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:4200'];
     
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'], // Add OPTIONS
    allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
    optionsSuccessStatus: 200 
  })
);


const ecomerce_midle_proxy = createProxyMiddleware({
  target: ECOMMERCE_BACKEND_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/marketmandu': '',
  }
});

const payment_midle_proxy = createProxyMiddleware({
  target: PAYMENT_BACKEND_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/payment': '',
  },

});



app.use("/marketmandu",ecomerce_midle_proxy );
app.use("/payment", payment_midle_proxy);

app.listen(PORT, () => {
  console.log(`Gateway running on http://localhost:${PORT}`);
});
