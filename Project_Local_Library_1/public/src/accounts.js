function findAccountById(accounts, id) {
  //find the account by matching the id numbers
  let accountFound = accounts.find((accounts) => accounts["id"] === id);
  
  return accountFound
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB) => {
    //change both comparing account names to lower case for easier comparison
    let x = accountsA["name"]["last"].toLowerCase();
    let y = accountsB["name"]["last"].toLowerCase();
    //if x is after y alphabetically swap them by returning negative 1
   return (x < y ? -1 : 1);
    //if (x < y){return -1;}
    //if (x > y){return 1;}
  })
  
}

function getTotalNumberOfBorrows(account, books) {
  const {'id': id} = account;
  
  let total = 0;
  //loop through book array
  books.forEach(book => {
    //loop through the borrows array in books
    book['borrows'].forEach(borrows =>{
      //
      if (borrows['id'] === id){
        total += 1;
      }
      
    })
  })
  return total;
}

function getBooksPossessedByAccount(account, books, authors) { 
  const inPossession = [];
  //loop through books 
  books.map((book) => {
    //loop through each borrows array for each book
    book.borrows.map((borrow) =>{
      //loop through author array
      authors.map((author) => {
        //if the autur id and book id match make the books author that author object
        if (author.id === book.authorId) book['author'] = author;
      });
      //if the book has not been returned and the ids match then add the book to the possession 
      if (borrow.returned === false && borrow.id === account.id){
        inPossession.push(book);
      }
    })
  })
  return inPossession;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
