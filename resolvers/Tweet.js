const { users, stats } = require('../db');

exports.Tweet = {
  Author: (parent, args, context) => {
    return users.find((user) => user.id === parent.userId);
  },
  Stats: (parent, args, context) => {
    return stats.find((stat) => {
      return stat.id === parent.statId;
    });
  },
};
