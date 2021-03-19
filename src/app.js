const classControllerMenu = require('./controller/menu.js');

class App {
	static init() {
		const controllerMenu = new classControllerMenu();
    
		controllerMenu.displayMenu();
		controllerMenu.getUserInput();
	}
}

App.init();
