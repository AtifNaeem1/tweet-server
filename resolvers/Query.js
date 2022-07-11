const { tweets, users, notifications } = require('../db');

exports.Query = {
  Tweet: (parent, { id }, context) =>
    tweets.find((tweet) => tweet.id === id),

  Tweets: (
    parent,
    { limit, skip, sort_field, sort_order },
    context
  ) => {
    let limitTweets = tweets;
    if (skip !== null) {
      limitTweets = tweets.filter(
        (tweet, key) => !(key + 1 === skip)
      );
    }
    if (limit > 0) {
      limitTweets = limitTweets.filter((tweet, key) => key < limit);
    }
    if (sort_order) {
      if (sort_order.toLowerCase() === 'asc') {
        limitTweets.sort((a, b) =>
          a[sort_field].toLowerCase() < b[sort_field].toLowerCase()
            ? 1
            : -1
        );
      }
      if (sort_order.toLowerCase() === 'desc') {
        limitTweets.sort((a, b) =>
          a[sort_field].toLowerCase() > b[sort_field].toLowerCase()
            ? 1
            : -1
        );
      }
    }
    return limitTweets;
  },

  TweetsMeta: (parent, args, context) => {
    let l = tweets.length;
    return { count: l };
  },

  User: (parent, { id }, context) =>
    users.find((user) => user.id === id),

  Notifications: (parent, { limit }, context) => {
    if (limit > 0) {
      finalNotifications = notifications.filter(
        (notifications, key) => key < limit
      );
    }
    return finalNotifications;
  },

  NotificationsMeta: (parent, args, context) => {
    let l = notifications.length;
    return { count: l };
  },
};
