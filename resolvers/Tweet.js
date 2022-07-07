exports.Tweet = {
  Author: (parent, args, { users }) => {
    return users.find((user) => user.id === parent.userId);
  },
  Stats: (parent, args, { stats }) => {
    return stats.find((stat) => {
      return stat.id === parent.statId;
    });
  },
};
