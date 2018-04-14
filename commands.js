var mongoose = require('mongoose');
var assert = require('assert');

database = mongoose.connect('mongodb://localhost:27017/notes');

var countNotes = function(){
	console.log(Note.count({}))
	return Note.count({});

}

var noteSchema = mongoose.Schema({

	Title: String,

	Body: String

});



var Note = mongoose.model('Note',noteSchema);

var addNote = function(note){
	Note.create(note, function(err){
		assert.equal(null, err);
		console.log('Note added !');

	});
}

var showNotes = function(){
	Note.find({}, function(err, notes){
		assert.equal(null, err);
	
		notes.forEach(function(note){
			console.log(note.Title);
			console.log(note.Body);
			console.log('\n');
			;
		});
		process.exit();
	});
}

var retrieveNote = function(title){
	Note.find({Title: title}, function(err, notes){
		assert.equal(null, err);
		notes.forEach(function(note){
			console.log(note.Title);
			console.log(note.Body);
			console.log('\n');
		});
	});
}





module.exports = {addNote, showNotes, retrieveNote, countNotes};