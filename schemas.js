const { gql } = require("apollo-server");

// for non-nullable values add ! at name end
module.exports.typeDefs = gql`
  type Query {
    id: ID!
    hello: String!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String
    products: [Product!]!
  }
`;
