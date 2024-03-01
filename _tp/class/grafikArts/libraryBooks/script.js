class Book {
    #_currentPage = 1;
    _nbPages = 0;
    _title = "";
    
    constructor(titre, nbPage) {
        this._title = titre;
        this._nbPages = nbPage;
        this.#_currentPage = 1;
    }
    get page() {
        return this.#_currentPage;
    }
    get title() {
        return this._title;
    }
    nextPage() {
        this.#_currentPage++;
        if (this.#_currentPage > this._nbPages) this.#_currentPage = 1;
    }
    close() {
        this.#_currentPage = 1;
    }
}

class Library {
    #_books = [];

    addBook(book) {
        if (typeof book !== "object") return;
        this.#_books.push(book);
    }
    addBooks(books) {
        if (!Array.isArray(books)) return;
        
        /*
        books.forEach(item => {
            if (typeof item === "object") {
                this.#_books.push(item);
            };
        });
        */
        // Correction by GrafikArts
        books.forEach(item => {
            this.addBook(item);
        }, this);   
    }
    printBook(){
        this.#_books.forEach((item,index)=>{
            console.log(index, item.title);
        })
    }

    /*
    findBooksByLetter(v) {
        return this.#_books.find((item)=>{
            if (item.title.indexOf(v) >= 0)
                return  item;
        })
    }
    */
    // Correction by GrafikArts
    findBooksByLetter(v) {
        let result = this.#_books.filter(item => {
            return item.title[0].toLowerCase() === v.toLowerCase();
        });
        return result;
    }
}


const b = new Book('Seigneur des anneaux', 3);
console.log("current page: ", b.page)
b.nextPage()
console.log("current page: ", b.page)
b.nextPage()
console.log("current page: ", b.page)
b.close()
console.log("current page: ", b.page)
const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
l.printBook();
console.log(l.findBooksByLetter('o'))