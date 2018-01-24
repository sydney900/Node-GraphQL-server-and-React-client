const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ClientType = require('./client_type');
const ProductType = require('./product_type');
const Product = mongoose.model('product');
const Client = mongoose.model('client');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    clients: {
      type: new GraphQLList(ClientType),
      resolve() {
        return Client.find({});
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Client.findById(id);
      }
    },
    products: {
        type: new GraphQLList(ProductType),
        resolve() {
            return Product.find({});
        }
    },
    product: {
      type: ProductType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Product.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
