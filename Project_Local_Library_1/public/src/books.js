function findAuthorById(authors, id) {

  return authors.find(author => {
  if(author['id'] === id) return author;
})
  
}

function findBookById(books, id) {
    return books.find(book => {
  if(book['id'] === id) return book;
    })
  }
function loanedBooks(books){
  return books.filter(book => book['borrows'][0]['returned'] === false
  )
}
function returnedBooks(books){
  return books.filter(book => book['borrows'][0]['returned'] === true
  )
}
function partitionBooksByBorrowedStatus(books) {
  let loanedBookArray = loanedBooks(books);
  let returnedBookArray = returnedBooks(books);

  return [loanedBookArray, returnedBookArray];
}

function getBorrowersForBook(book, accounts) {
  let borrowActivity = [];
  
  accounts.map((account) =>{
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
