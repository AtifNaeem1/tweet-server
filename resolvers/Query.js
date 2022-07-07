exports.Query = {
  Tweet: (parent, { id }, { tweets }) =>
    tweets.find((tweet) => tweet.id === id),

  Tweets: (
    parent,
    { limit, skip, sort_field, sort_order },
    { tweets }
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

  TweetsMeta: (parent, args, { tweets }) => {
    let l = tweets.length;
    return { count: l };
  },

  User: (parent, { id }, { users }) =>
    users.find((user) => user.id === id),

  Notifications: (parent, { limit }, { notifications }) => {
    if (limit > 0) {
      finalNotifications = notifications.filter(
        (notifications, key) => key < limit
      );
    }
    return finalNotifications;
  },

  NotificationsMeta: (parent, args, { notifications }) => {
    let l = notifications.length;
    return { count: l };
  },
};
