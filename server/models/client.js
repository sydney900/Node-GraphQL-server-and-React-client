const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    clientName: String,
    clientPassword: String,
    email: String,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]
});

ClientSchema.statics.addProduct = function (id, name) {
    const Product = mongoose.model('product');

    return this.findById(id)
        .then(client => {
            const product = new Product({ name})
            client.products.push(product)
            return Promise.all([product.save(), client.save()])
                .then(([product, client]) => song);
        });
}

ClientSchema.statics.findProducts = function (id) {
    return this.findById(id)
        .populate('products')
        .then(client => client.products);
}

mongoose.model('client', ClientSchema);
