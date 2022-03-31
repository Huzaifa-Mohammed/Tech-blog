const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: "user_id",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

// relationship between user and comment
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

//relationship between comment and post
Post.hasMany(Comment, {
    foreignKey: "post_id",
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "SET NULL",
});


module.exports = { Post, User, Comment };