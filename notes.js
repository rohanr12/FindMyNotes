

var {prompt} = require('inquirer');
var program = require('commander');
var {addNote, showNotes, retrieveNote, countNotes} = require('./commands.js');

var count = 0;

const questions = [
  {
    type : 'input',
    name : 'Title',
    message : 'Enter Title ...'
  },
  {
    type : 'input',
    name : 'Body',
    message : 'Enter Note ...'
  }
  
];


program
	.version('1.0.0')
	.description('Note management System');


program
	.command('addNote')
	.alias('n')
	.description('Add a Note')
	.action(function(){
		prompt(questions)
		.then(function(answers){
			addNote(answers);
		});
	});


program
	.command('getNote <title>')
	.alias('g')
	.description('Retrieve a Note')
	.action(function(title){
		retrieveNote(title);
	});


program
	.command('getAllNotes')
	.alias('a')
	.description('Retrieve all Notes')
	.action(function(){
		showNotes();
	});


if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv);