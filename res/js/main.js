


window.onload = async () => {
    try {
        const file = await fetch("./res/data/books.json");
        const data = await file.json();
        console.log(data);
        console.log(data.count);
        console.log(data.books);
        data.books.forEach((book) => {
            console.log(book);
        });
        data.books.map((book) => {
            console.log(book);
            console.log(book.name)
            console.log(book.pages)
            console.log(book.release_date)
            console.log(book.author)
        });
    } catch (err) {
        console.log(err);
    }
}