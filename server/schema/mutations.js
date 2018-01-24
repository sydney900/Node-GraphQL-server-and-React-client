const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Client = mongoose.model('client');
const Product = mongoose.model('product');
const ClientType = require('./client_type');
const ProductType = require('./product_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                clientName: { type: GraphQLString },
                clientPassword: { type: GraphQLString },
                email: { type: GraphQLString },

            },
            resolve(parentValue, { clientName, clientPassword, email }) {
                return (new Client({ clientName, clientPassword, email })).save()
            }
        },
        addProductToClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLString },
                clientId: { type: GraphQLID }
            },
            resolve(parentValue, { name, clientId }) {
                return Client.addProduct(clientId, name);
            }
        },
        addClientToProduct: {
            type: ProductType,
            args: { id: { type: GraphQLID }, clientId: { type: GraphQLID } },
            resolve(parentValue, { id, clientId }) {
                return Product.addClient(id, clientId);
            }
        },
        deleteClient: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Client.remove({ _id: id });
            }
        },
        deleteProduct: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Product.remove({ _id: id });
            }
        }
    }
});

module.exports = mutation;
