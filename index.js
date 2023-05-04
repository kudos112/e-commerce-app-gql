const { ApolloServer, gql } = require("apollo-server");

 // for non-nullable values add ! at name end
const typeDefs = gql`
  type Query {
    hello: String!,
    kitneAdminThay: Int,
    goliyoKiTadad: Float,
    gaoWaleJagRaheThay: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "World!!!",
    kitneAdminThay: ()=>"2",
    goliyoKiTadad: ()=>1500.00,
    gaoWaleJagRaheThay: ()=>false,

  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
  .listen()
  .then(({ url }) => console.log("Server is running at Url ", url));
