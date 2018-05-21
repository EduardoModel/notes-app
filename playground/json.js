//O JSON transforma um objeto em uma string, e vice versa

/*
//Transmorma um objeto em uma string para ser enviada ou guardada
let obj = {
	name: 'Eduardo'
}
let stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)
*/

/*
//Transforma uma string em um objeto para manipular dentro do código
let personString = '{"name": "Eduardo", "age": 22}'
let person = JSON.parse(personString)
console.log(typeof person)
console.log(person)
*/

const fs = require('fs')

let originalNote = {
	title: 'Some title',
	body: 'Some body'
}
//originalNoteString
let originalNoteString = JSON.stringify(originalNote)
fs. writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json')
//note
let note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)