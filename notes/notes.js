const fs = require('fs')

let fetchNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json')
		return JSON.parse(notesString)
	} catch(e){
		return []
	}
}

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}


let addNote = (title, body) =>{
	let notes = fetchNotes()
	let note = {
		title,
		body
	}

	let duplicateNotes = notes.filter((note) => note.title === title)

	if(duplicateNotes.length === 0){
		notes.push(note)
		saveNotes(notes)
		return note
	}
}

let getAll = () => {
	return fetchNotes()
}

let getNote = (title) =>{
	let notes = fetchNotes()
	let note = notes.filter((note) => note.title === title)
	return note[0]
}

let removeNote = (title) => {
	let notes = fetchNotes()
	//o filtro nesse caso retorna as notas que são diferentes do titulo informado, quando for o título ele não o retornará!
	let notesElementRemoved = notes.filter((note) => note.title !== title)
	saveNotes(notesElementRemoved)

	return notes.length !== notesElementRemoved.length
}

let logNote = (note) => {
	console.log('---')
	console.log(`Titulo: ${note.title}`)
	console.log(`Descrição: ${note.body}`)
}

//serve para exportar funções!
//neste caso tu exporta a variavel que também é uma função!
//é um objeto
//no e6 tu não precisa fazer o esquema addNote: addNote se o método é igual a chamada externa
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}