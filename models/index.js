const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wikistack');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

const Schema = mongoose.schema;

const statuses = ['open', 'closed'];

const pageSchema = new Schema({
  title: { type: String, required: true },
  urlTitle: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: statuses },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Page = mongoose.model('Page', pageSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Page,
  User,
};
