const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This is great!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Thanks to everyone who have contributed!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Let's get this bread!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Great. Now I'm hungry for Ramen.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Nice",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Yeah! That's the way we do it ;) ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;