const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ProductType = require('./product_type');
const Client = mongoose.model('client');

const ClientType = new GraphQLObjectType({
    name: 'ClientType',
    fields: () => ({
        id: { type: GraphQLID },
        clientName: { type: GraphQLString },
        clientPassword: { type: GraphQLString },
        email: { type: GraphQLString },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parentValue) {
                return Client.findProducts(parentValue.id);
            }
        }
    })
});

module.exports = ClientType;
