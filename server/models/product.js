const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    clients: [{
        type: Schema.Types.ObjectId,
        ref: 'client'
    }]
});

ProductSchema.statics.addClient = function(id, clientId) {
    const Product = mongoose.model('product');

    return Product.findById(id)
    .then(p => {
      p.clients.push(clientId);
      return p.save();
    })
}

mongoose.model('product', ProductSchema);
