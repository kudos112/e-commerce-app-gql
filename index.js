const { ApolloServer, gql } = require("apollo-server");
const { products, categories } = require("./db");

// for non-nullable values add ! at name end
const typeDefs = gql`
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

const resolvers = {
  Query: {
    hello: (parent, args, context) => "World!!!",
    products: (parent, args, context) => products,
    product: (parent, { id }, context) => {
      return products.find((product) => product.id === id);
    },
    categories: (parent, args, context) => categories,
    category: (parent, { id }, context) => {
      return categories.find((category) => category.id === id);
    },
  },
  Category: {
    products: (parent, args, context) => {
      return products.filter((product) => product.categoryId === parent.id);
    },
  },
  Product: {
    category: (parent, args, context) => {
      return categories.find(category => category.id === parent.categoryId)
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log("Server is running at Url ", url));
