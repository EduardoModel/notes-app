const fs = require('fs')
const _ = require('lodash')
//parser dos argv
const yargs = require('yargs')

//fazendo reuso de código
//descreve as configurações para os comandos title e body
//declara elas como const, pois não serão alteradas
const titleOptions =  {
	describe: 'Titulo da nota',
	demand: true,	//não esquece as virgulas!!!
	alias: 't'		//modifica a chamada do comando, em vez de usar --title, usa só -t
}
const bodyOptions = {
	describe: 'Conteúdo da nota',
	demand: true,
	alias: 'b'	
}





//Notes
const notes = require('./notes/notes.js')
//formato pareceido com jquery
const argv = yargs
	.command('add', 'Adiciona uma nova nota', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'Lista todas as notas')
	.command('read', 'Lê uma nota específica', {
		title: titleOptions
	})
	.command('remove', 'Remove uma nota específica', {
		//aqui dentro seria o title: {especs}
		title: titleOptions
	})
	.help() 	//abilita rodar o programa com a flag help para auxiliar nos comendos!
	.argv;
let command = argv._[0]




//console.log('Comando:', command)
//console.log('Process', process.argv)
//console.log('Yargs: ', argv)


if(command === 'add'){
	let note = notes.addNote(argv.title, argv.body)
	if(note){
		console.log('Nota criada!')
		notes.logNote(note)
	}
	else{
		console.log('Nota já existente ou ocorreu um erro!')
	}

}else if(command === 'list'){
	let allNotes = notes.getAll()
	console.log(`Mostrando ${allNotes.length} nota(s)`)
	allNotes.forEach((note) => notes.logNote(note))

}else if(command === 'read'){
	let note = notes.getNote(argv.title)
	if(note){
		console.log('Nota encontrada')
		notes.logNote(note)
	}else{
		console.log('Nota não encontrada!')
	}

}else if(command === 'remove'){
	let noteRemoved = notes.removeNote(argv.title)
	let message = noteRemoved ? 'Nota removida!' : "Nota não encontrada!"
	console.log(message)

}else{
	console.log('Commando não reconhecido!')
} 

