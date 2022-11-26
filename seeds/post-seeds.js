const { Post } = require('../models');

const postData = [
  {
    title: 'Game Expansion Release!',
    post_text: 'Wow I have no idea what to write for this.',
    user_id: 1,
  },
  {
    title: 'Handlebars Template En',
    post_text: 'Something Something',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    post_text: 'It is just no use',
  },
  {
    title: 'Sessions',
    post_text: 'When a user logs in, a session can be established using a package such as Express Session. A cookie will be saved on the user computer, authenticating them on the website. Hope your data does not get stolen.  Cookies can be set for a limited time or indefinitely.',
    user_id: 3,
  },
  {
    title: 'Hashing',
    post_text: 'A very important part of user authentication is hashing passwords. When a user creates a password and when they log in, sensitive information like the password should be protected.',
  },
  {
    title: 'Express.js',
    post_text: 'With a few lines of code, you can be on your way to hosting a dynamic  and interesting webpage for the users.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;