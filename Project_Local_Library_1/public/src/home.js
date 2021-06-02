function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  books.forEach((book) => {
    if (book['borrows'][0]['returned'] === false){
      borrowedBooks += 1;
    }
  })
  return borrowedBooks;
}

function getMostCommonGenres(books) {

  const commonBooks = books.reduce((acc, book) => {
    const count = books.filter(bookSelect => bookSelect['genre'] === book['genre']).length

    if (!acc.some(currentBook => currentBook.name === book.genre)){
      acc.push({name: book.genre, count: count})
      return acc
    }

    return acc;
  },[]);
console.log(commonBooks)
return commonBooks.sort((a,b) => {
    return b.count-a.count;
  }).slice(0,5);   
}


function getMostPopularBooks(books) {

  const popBooks = books.reduce((acc, book) =>{
    const count = book.borrows.length;

    if (!acc.some(currentBook => currentBook.name === book.title)){
      acc.push({name: book.title, count: count})
      return acc
    }


    return acc;
  },[])

  console.log(popBooks)
  return popBooks.sort((a,b) => {
    return b.count-a.count;
  }).slice(0,5);
}

function getTotalBorrows(books){
  let borrowCount = 0;

  for(let i = 0; i < books.length; i++){
    borrowCount += books[i].borrows.length;
  }
  return borrowCount;
}

function getMostPopularAuthors(books, authors) {
  //loop author
  const popAuthors = authors.reduce((acc, author) => {
    const bookFilter = books.filter(book => author["id"] === book["authorId"]);

    const count = getTotalBorrows(bookFilter);

    const authorName = author["name"]["first"] + " " + author["name"]["last"]

      if (!acc.some(currentAuthor => currentAuthor.name === authorName)){
        acc.push({name: authorName, count: count})
      return acc
    }
      return acc
  }, [])
  
  return popAuthors.sort((a,b) =>{
    return b.count - a.count
  }).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
