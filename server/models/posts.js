var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var PostSchema = new mongoose.Schema({
    title     : String,
    body      : String,
    author    : String,
    date      : { type: Date }, 
    upvotes   : { type: Number, default: 0 },
    heroPosted: { type: mongoose.Schema.Types.ObjectId, ref: 'Heroes'},
    comments  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    allComments : {type: Number, default: 0},
    owner     : { type:mongoose.Schema.Types.ObjectId, ref: 'User'} 
});


PostSchema.methods.upvote = function (cb) {
    this.upvotes += 1;
    this.save(cb);
};

PostSchema.methods.downvote = function (cb) {
    this.upvotes -= 1;
    this.save(cb);
};
PostSchema.plugin(deepPopulate);
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;




