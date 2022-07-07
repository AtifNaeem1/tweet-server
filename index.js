const { ApolloServer } = require('apollo-server');
const { notifications, stats, users, tweets } = require('./db');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Tweet } = require('./resolvers/Tweet');

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Tweet },
  context: {
    notifications,
    stats,
    users,
    tweets,
  },
});

server.listen().then(({ url }) => {
  console.log('Sever is ready at ' + url);
});
