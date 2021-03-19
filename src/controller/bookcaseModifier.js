const classMdlBookcase = require('../model/bookcase.js');
const classMdlBook = require('../model/book.js');
const classInput = require('../controller/input.js');

const mdlBook = new classMdlBook();
const mdlBookcase = new classMdlBookcase();

class BookcaseModifier {
	addBook() {
		const strTitle = classInput._enterTitle();
		const strAuthor = classInput._enterAuthor();
		const intPagesNumber = classInput._enterNumberOfPages();
		const intReleaseDate = classInput._enterReleaseDate();
		
		mdlBook.setTitle(strTitle);
		mdlBook.setAuthor(strAuthor);
		mdlBook.setNumberOfPages(intPagesNumber);
		mdlBook.setReleaseDate(intReleaseDate);

		mdlBookcase.setBook(mdlBook.getTitle());
	}

	displayBooks() {
		const books = mdlBookcase.getBooks();
		
		books.forEach(book => {
			console.log(book);
		});
	}
}

module.exports = BookcaseModifier;