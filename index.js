const { ApolloServer, gql } = require("apollo-server");

 // for non-nullable values add ! at name end
const typeDefs = gql`
  type Query {
    hello: String!,
    products: [Product!]!
  }

  type Product {
    name: String!,
    description: String!,
    quantity: Int!,
    price: Float!,
    onSale: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "World!!!",
    products: ()=>([{
        name: "Macbook Pro",
        description: "Love it, Only need 1",
        quantity: "1",
        price: 1000,
        onSale: false
    }])
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
  .listen()
  .then(({ url }) => console.log("Server is running at Url ", url));
