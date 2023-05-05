const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { typeDefs } = require("./schemas");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context : {
    products, 
    categories
  }
});

server
  .listen()
  .then(({ url }) => console.log("Server is running at Url ", url));
