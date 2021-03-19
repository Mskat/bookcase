const classInput = require('./input.js');
const classControllerBookcaseModifier = require('../controller/bookcaseModifier.js');

const controllerBookcaseModifier = new classControllerBookcaseModifier();

class Menu {
	displayMenu() {
		console.log('\nChoose one of the options:');
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
				console.log('\nBook list:');
				controllerBookcaseModifier.displayBooks();
				this.displayMenu();
				break;
			case '2':
				console.log('\nAdd book:');
				controllerBookcaseModifier.addBook();
				this.displayMenu();
				break;
			case '3':
				console.log('\nYou closed the program.');
				break;
			default:
				console.log('\nChoose number from the list!');
				classInput._pressEnterToContinue();
				this.displayMenu();
			}
		} while (!(chosenNumber == '3'));
	}
}

module.exports = Menu;
