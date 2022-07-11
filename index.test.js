const { notifications, stats, users, tweets } = require('./db');
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Tweet } = require('./resolvers/Tweet');
const { Mutation } = require('./resolvers/Mutation');

test('returns all tweets', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers: { Query, Tweet, Mutation },
    context: {
      notifications,
      stats,
      users,
      tweets,
    },
  });

  const result = await testServer.executeOperation({
    query: 'query {Tweets{body}}',
  });

  expect(result.errors).toBeUndefined();
});

test('returns tweet by id', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers: { Query, Tweet, Mutation },
    context: {
      notifications,
      stats,
      users,
      tweets,
    },
  });

  const result = await testServer.executeOperation({
    query:
      'query getTweet{ Tweet(id: "c3c4cc5e-6612-4b27-9a6e-20fbd09510f0") {body}}',
  });

  expect(result.errors).toBeUndefined();
  expect(result.data?.Tweet.body).toBe(
    'we have updated our player card guidelines'
  );
});

test('returns user by id', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers: { Query, Tweet, Mutation },
    context: {
      notifications,
      stats,
      users,
      tweets,
    },
  });

  const result = await testServer.executeOperation({
    query: 'query{ User(id: "wxyw2") { username}}',
  });

  expect(result.errors).toBeUndefined();
  expect(result.data?.User.username).toBe('jazzatif');
});
