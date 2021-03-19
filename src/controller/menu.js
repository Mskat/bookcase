const classInput = require('./input.js');
const classControllerBookcaseModifier = require('../controller/bookcaseModifier.js');

const controllerBookcaseModifier = new classControllerBookcaseModifier();

class Menu {
	displayMenu() {
		console.log('Choose one of the options:');
		console.log('1. Book list');
		console.log('2. Add Book');
		console.log('3. End program');
		console.log('\n');
	}

	getUserInput() {
		let chosenNumber;
    
		do {
			chosenNumber = classInput._getInput();
			switch (chosenNumber) {
			case '1':
				console.log('Book list:');
				controllerBookcaseModifier.displayBooks();
				this.displayMenu();
				break;
			case '2':
				console.log('Add book:');
				controllerBookcaseModifier.addBook();
				this.displayMenu();
				break;
			case '3':
				console.log('You closed the program.');
				break;
			default:
				console.log('Choose number from the list!\n');
				classInput._pressEnterToContinue();
				this.displayMenu();
			}
		} while (!(chosenNumber == '3'));
	}
}

module.exports = Menu;
