const express = require('express');
const cors = require('cors')
const app = express();
require('./config/mongoose.config');
app.use(cors())
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;
const Routes = require('./routes/product.routes');
Routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );