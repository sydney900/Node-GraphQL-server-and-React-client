const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = graphql;
const Product = mongoose.model('product');

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        clients: {
            type: require('./client_type'),
            resolve(parentValue) {
                return Product.findById(parentValue).populate('clients')
                    .then(prod => {
                        console.log(prod)
                        return prod.clients;
                    });
            }
        }
    })
});

module.exports = ProductType;
