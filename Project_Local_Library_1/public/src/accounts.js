function findAccountById(accounts, id) {
  let accountFound = accounts.find((accounts) => accounts["id"] === id);
  console.log(accountFound)
  return accountFound
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB) => {
    let x = accountsA["name"]["last"].toLowerCase();
    let y = accountsB["name"]["last"].toLowerCase();
    if (x < y){return -1;}
    if (x > y){return 1;}
  })
  
}

function getTotalNumberOfBorrows(account, books) {
  const {'id': id} = account;
  
  let total = 0;
  books.forEach(book => {
    book['borrows'].forEach(borrows =>{
      if (borrows['id'] === id){
        total += 1;
      }
      
    })
  })
  return total;
}

function getBooksPossessedByAccount(account, books, authors) { 
  const inPossession = [];
  
  books.map((book) => {
    book.borrows.map((borrow) =>{
      authors.map((author) => {
        if (author.id === book.authorId) book['author'] = author;
      });
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
