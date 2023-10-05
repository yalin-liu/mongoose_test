const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://ylliustudy:ylliustudy@ac-f6akjg6-shard-00-00.ss4pkul.mongodb.net:27017,ac-f6akjg6-shard-00-01.ss4pkul.mongodb.net:27017,ac-f6akjg6-shard-00-02.ss4pkul.mongodb.net:27017/test?ssl=true&replicaSet=atlas-juzhl5-shard-0&authSource=admin&retryWrites=true&w=majority',
				 {useMongoClient: true,}
);
const kittySchema = require('./models/kitty');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
	let Kitten = mongoose.model('Kitten', kittySchema);
	let fluffy = new Kitten({name: 'fluffy', age: 0});

	fluffy.save((err) => {
		if (err) throw err
		console.log('Kitten created!')
		db.close();
	});
});
