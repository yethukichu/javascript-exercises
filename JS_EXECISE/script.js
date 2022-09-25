function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read; 
    this.info=function(){
        console.log(`The ${title} by ${author}. Tolkien, ${pages} pages, ${read}`)
    }
}
const book1=new Book("Hobbit","jrr","295","not read yet")
book1.info();