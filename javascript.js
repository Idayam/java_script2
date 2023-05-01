//Create a function called getAvailableBooks that returns an array of all available
//books.

let books=["Born A crime","Mallice","The River Bewteen"]
 function getAvailableBooks(){
    
 }
 console.log(books);

 //Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
let author=["Trevor Noah","Danielle Steel","Danielle Steel"]

function getBooksByAuthor(author,books){
    if(author.length>=2 && books.length>=2){
        return author
    }

}
console.log(getBooksByAuthor(author,books));

// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
let NewBook=[{title:'Chasing Red',author:'Sylvia Grey',publicationYear:2005,statas:'isAvailable'
}]
let book=[]

function addNewBook(){

NewBook.push()
}
 console.log(NewBook); 
console.log(addNewBook(NewBook));


//  Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
  let title=['Chasing Red']
  function checkoutBook(){
        if(title.length>=3){
            return('isAvailable')
        }
        else{
            'not available'
        }
    }
    console.log(title)
    


//Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
  let name=['Born A Crime']

  function returnBook(){
    if(name.length>=3){
        return ('true')
    }

  }
  console.log(name);
  console.log(returnBook);

  

    

 