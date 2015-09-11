var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var CommentSchema = new mongoose.Schema( {
    body      : String,
    author    : String,
    upvotes   : { type: Number, default: 0 },
    date      : { type: Date },
    post      : { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    pComment  : { type: String, default: "RootComment"},  //{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}, //parentComment like this for formality, but lets be cheap
    treeStruc : String,
    comments  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    nthNode   : { type: Number, default: 0}, 
    owner     : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});


CommentSchema.methods.upvote = function (cb) {
    this.upvotes += 1;
    this.save(cb);
};

CommentSchema.methods.downvote = function (cb) {
    this.upvotes -= 1;
    this.save(cb);
};
CommentSchema.plugin(deepPopulate);
var Comment = mongoose.model('Comment', CommentSchema, 'Comment');
module.exports = Comment;