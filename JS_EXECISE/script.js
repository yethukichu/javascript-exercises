function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read; 
    this.info=function(){
        console.log(`The ${this.title} by ${this.author}. Tolkien, ${this.pages} pages, ${this.read}`)
    }
}
const book1=new Book("Hobbit","jrr","295","not read yet")
book1.info();