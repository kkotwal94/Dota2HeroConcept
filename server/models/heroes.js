var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var HeroSchema = new mongoose.Schema( {
    skills    : [{
        skill : {type: String, default : ' '},
        icon  : {type: String, default : ' '},
        description: {type: String, default : ' '} }],
    type      : {type: String, default: ' '},
    ranged    : {type: Boolean, default: false},
    heroName  : {type: String, default: ' '},
    heroTitle : {type: String, default: ' '},
    heroPotrait: {type: String, default: ' '},
    heroModel : {type: String, default: ' '}, //its a link to a model
    heroAnimations: {type: String, defualt: ' '},
    heroLore  : {type: String, default: ' '},
    heroStats :  {
        Intelligence: {type: Number, default : 0},
        Strength:     {type: Number, default:  0},
        Agillity:     {type: Number, default:  0}
    },
    upvotes   : { type: Number, default: 0 },
    date      : { type: Date },
    owner     : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

HeroSchema.plugin(deepPopulate);
var Hero = mongoose.model('Hero', HeroSchema);
module.exports = Hero;