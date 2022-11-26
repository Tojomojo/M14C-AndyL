// An index file to gather the models and export them for use

// User model
const User = require('./User');
// Post model
const Post = require('./Post');
// Comment model
const Comment = require('./Comment');

// Create associations between the models
// User-Post 
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post-User 
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-User 
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    hooks:true
});

// Comment-Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks: true
});

// User-Comment 
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    hooks:true
});

// Post-Comment 
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks:true
})

module.exports = { User, Post, Comment };