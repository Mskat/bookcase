class Bookcase {
	constructor() {
		this._arrBooks = [];
	}
	setBook(objBook) {
		this.getBooks().push(objBook);
	}

	getBooks() {
		return this._arrBooks;
	}
}

module.exports = Bookcase;

