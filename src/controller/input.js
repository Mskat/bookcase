const prompt = require('prompt-sync')({ sigint: true });

class Input {
	static _getInput() {
		let strInput = prompt('Enter number: ');
		return strInput;
	}

	static _pressEnterToContinue() {
		let strInput = prompt('Press enter to try again.\n');
		return strInput;
	}

	static _enterTitle() {
		let strTitle = prompt('Enter title: ');
		return strTitle;
	}

	static _enterAuthor() {
		let strAuthor = prompt('Enter author: ');
		return strAuthor;
	}

	static _enterNumberOfPages() {
		let intNumberOfPages = prompt('Enter number of pages: ');
		return intNumberOfPages;
	}
}

module.exports = Input;

