const classControllerMenu = require('./controller/showMenu.js');

class App {
	static init() {
		const controllerMenu = new classControllerMenu();
    
		controllerMenu.showMenu();
		controllerMenu.getUserInput();
	}
}

App.init();
