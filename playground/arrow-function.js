//pode usar desta forma, dado que é uma expressão simples
//lembra muito as lambda functions
//let square = (x) => x*x
//se só tem um parâmetro, pode colocar ele direto
let square = x => x*x

console.log(square(9))

let user = {
	name: 'Eduardo',
	sayHi: () => {
		console.log(arguments) //Acessa os argumentos globais da aplicação
		console.log(`Hi. I'm ${this.name}`)
	},
	//notação es6, e já tem acesso direto ao campo name
	sayHiAlt () {
		console.log(arguments) //Acessa os argumentos passados para a arrowfunction
		console.log(`Hi. I'm ${this.name}`)
	}
}

user.sayHiAlt(1, 2, 3)
 