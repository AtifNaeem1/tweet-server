const tweets = [
  {
    id: 'c3c4cc5e-6612-4b27-9a6e-20fbd09510f0',
    body: 'we have updated our player card guidelines',
    date: '2012-01-26T13:51:50.417-07:00',
    userId: 'wxyw2',
    statId: 'xsyt2',
    isRead: true,
  },
  {
    id: 'xa23ds',
    body: 'updated rules of the roads and display requirement',
    date: '2012-02-12T13:51:50.417-07:00',
    userId: 'wxyw3',
    statId: 'xsyt3',
    isRead: false,
  },
  {
    id: 'f5rt6h',
    body: 'Thanks everyone API v1 retirement is completed',
    date: '2013-05-21T13:51:50.417-07:00',
    userId: 'wxyw3',
    statId: 'xsyt4',
    isRead: false,
  },
  {
    id: 'asd89s',
    body: 'we have a new CEO',
    date: '2018-01-07T13:51:50.417-07:00',
    userId: 'wxyw4',
    statId: 'xsyt5',
    isRead: true,
  },
];

const users = [
  {
    id: 'wxyw2',
    username: 'jazzatif',
    first_name: 'Atif',
    last_name: 'Naeem',
    full_name: 'Atif Naeem',
    avatar_url:
      'https://robohash.org/15cc302a3b846bfe131d983f00b263b7?set=set4&bgset=&size=400x400',
  },
  {
    id: 'wxyw3',
    username: 'anilkumar',
    first_name: 'Anil',
    last_name: 'Kumar',
    full_name: 'Anil kumar',
    avatar_url:
      'https://avatars.dicebear.com/v2/female/15cc302a3b846bfe131d983f00b263b7.svg',
  },
  {
    id: 'wxyw4',
    username: 'ajaysinha',
    first_name: 'Ajay',
    last_name: 'Sinha',
    full_name: 'Ajay Sinha',
    avatar_url:
      'https://gravatar.com/avatar/15cc302a3b846bfe131d983f00b263b7?s=400&d=robohash&r=x',
  },
];

const stats = [
  {
    id: 'xsyt2',
    views: 100,
    likes: 20,
    retweets: 5,
    responses: 3,
  },
  {
    id: 'xsyt3',
    views: 500,
    likes: 280,
    retweets: 25,
    responses: 13,
  },
  {
    id: 'xsyt4',
    views: 50,
    likes: 10,
    retweets: 1,
    responses: 0,
  },
  {
    id: 'xsyt5',
    views: 1000,
    likes: 206,
    retweets: 225,
    responses: 23,
  },
];

const notifications = [
  {
    id: 'bgthy2',
    date: '2018-01-07T13:51:50.417-07:00',
    type: 'New device login',
  },
  {
    id: 'bgthy3',
    date: '2019-11-17T13:51:50.417-07:00',
    type: 'New follower request',
  },
  {
    id: 'bgthy5',
    date: '2028-11-23T13:51:50.417-07:00',
    type: 'session expired',
  },
];

module.exports = {
  notifications,
  stats,
  users,
  tweets,
};
