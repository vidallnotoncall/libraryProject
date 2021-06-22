function findAuthorById(authors, id) {
  //if the author id matches the id then return the first match
  return authors.find(author => {
  if(author['id'] === id) return author;
})
  
}

function findBookById(books, id) {
    //if the book id matches the id then return the first match
    return books.find(book => {
  if(book['id'] === id) return book;
    })
  }

function loanedBooks(books){
  //make an array of books that havent been returned yet
  return books.filter(book => book['borrows'][0]['returned'] === false
  )
}

function returnedBooks(books){
  //make an array of books that have been returned
  return books.filter(book => book['borrows'][0]['returned'] === true
  )
}

function partitionBooksByBorrowedStatus(books) {
  let loanedBookArray = loanedBooks(books);
  let returnedBookArray = returnedBooks(books);
  //return the new arrays within a new array
  return [loanedBookArray, returnedBookArray];
}

function getBorrowersForBook(book, accounts) {
  let borrowActivity = [];
  //loop through the accounts
  accounts.map((account) =>{
    //find the account that has borrowed the book and add it to the borrowActivity array
    book.borrows.find((borrow) =>{
      if (borrow.id === account.id){
        account['returned'] = borrow.returned;
        borrowActivity.push(account)
      }
    })
  })
  return borrowActivity.slice(0, 10);
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
