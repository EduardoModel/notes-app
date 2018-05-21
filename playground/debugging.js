let person = {
	name: 'Eduardo'
}

person.age = 22
//coloca o debugger pra parar quando tu for dar um c no debugger
debugger;

person.name = 'Mike'

console.log(person)

//node inspect tanana.js chama o debugger
//n é next line
//c é continue
//repl acessa os objetos e valores digitano o nome deles 
//pode usar o debugger junto com o nodemon!
//a flag --inspect-brk debuga com a ferramenta do chrome
//entra no chrome e digita: chrome://inspect e vai em open dedicated DevTools for Node
//pode usar com o nodemon tmb!!!