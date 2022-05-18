const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/product',ProductController.findAllProducts)
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put("/api/product/:id", ProductController.updateExistingProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct)
}