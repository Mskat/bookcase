class Bookcase {
	constructor() {
		this._arrBooks = [];
	}
	setBooks(objBook) {
		this.getBooks().push(objBook);
	}

	getBooks() {
		return this._arrBooks;
	}
}

module.exports = Bookcase;

