class Book {
	constructor(strTitle, strAuthor, intNumberOfPages, intReleaseDate) {
		this._strTitle = strTitle;
		this._strAuthor = strAuthor;
		this._intPagesNumber = intNumberOfPages;
		this._intReleaseDate = intReleaseDate;
	}
    
	getTitle() {
		return this._strTitle;
	}

	setTitle(strTitle) {
		this._strTitle = strTitle;
	}

	getAuthor() {
		return this._strAuthor;
	}

	setAuthor(strAuthor) {
		this._strAuthor = strAuthor;
	}

	getNumberOfPages() {
		return this._intPagesNumber;
	}

	setNumberOfPages(intNumberOfPages) {
		this._intPagesNumber = intNumberOfPages;
	}

	getReleaseData() {
		return this._intReleaseDate;
	}

	setReleaseData(intReleaseDate) {
		this._intReleaseDate = intReleaseDate;
	}
}

module.exports = Book;