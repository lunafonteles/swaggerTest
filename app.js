const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api/swagger.json');

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});

const products = [];

app.get('/products', (req, res) => {
    res.json([
        {
            name:"Luna",
            value: "10",
            id: 1
        },
        {
            name:"joe",
            value: "10",
            id: 2
        },
    ])
});
app.get('/products/:id', (req, res) => {
    const id = req.params;
    const product = products.find((product) => product.id === id)
    return res.json(product)
});
// app.put('/products/:id', (req, res) => {
//     const id = req.params;
//     const product = products.find((product) => product.id === id)
//     return res.json(product)
// });
app.delete('/products/:id', (req, res) => {
    return res.json("produto deletado")
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

