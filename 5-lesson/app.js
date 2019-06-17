const fs = require('fs');
const book = {
    title: "Good Life",
    author: "Rayhan Dev"
}

const bookJson = JSON.stringify(book);

fs.writeFileSync('book.json', bookJson)

// console.log(bookJson);

// console.log(bookJson.title);

// const parseBook = JSON.parse(bookJson);

// console.log(parseBook.author);

