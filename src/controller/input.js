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
}

module.exports = Input;

