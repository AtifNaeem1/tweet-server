const { v4: uuid } = require('uuid');
const { tweets } = require('../db');

exports.Mutation = {
  createTweet: (parent, { body }, context) => {
    const newTweet = {
      id: uuid(),
      body: body,
      date: new Date(),
      userId: 'wxyw2',
      statId: 'xsyt2',
    };
    tweets.push(newTweet);
    return newTweet;
  },

  deleteTweet: (parent, { id }, context) => {
    const currTweet = tweets.find((tweet) => tweet.id === id);
    for (var i = 0; i < tweets.length; i++) {
      if (tweets[i].id === id) {
        tweets.splice(i, 1);
      }
    }
    return currTweet;
  },

  markTweetRead: (parent, { id }, context) => {
    for (var i = 0; i < tweets.length; i++) {
      if (tweets[i].id === id) {
        tweets[i].isRead = true;
      }
    }
    return true;
  },
};
