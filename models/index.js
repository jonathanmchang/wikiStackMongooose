const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wikistack');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

const Schema = mongoose.schema;

const pageSchema = new Schema({
  title: String,
  urlTitle: String,
  content: String,
  date: { type: Date, default: Date.now },
  status: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const userSchema = new Schema({
  name: String,
  email: String,
});

const Page = mongoose.model('Page', pageSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Page,
  User,
};
