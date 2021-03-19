const classInput = require('./input.js');

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
				break;
			case '2':
				console.log('Add book:');
				break;
			case '3':
				console.log('You closed the program.');
				break;
			default:
				console.log('Choose number from the list!\n');
				classInput._pressEnterToContinue();
				this.displayMenu();
			}
		} while (!(chosenNumber == '3') && !(chosenNumber == '2') && !(chosenNumber == '1') );
	}
}

module.exports = Menu;
