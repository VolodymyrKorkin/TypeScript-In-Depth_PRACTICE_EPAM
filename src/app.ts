// Greeting (check if webpack works)
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ``````````````````````````````````````````````````````````````````````````````````````````````````
// 01 TypeScript In-Depth
// ``````````````````````````````````````````````````````````````````````````````````````````````````


// **************************************************************************************************
// 02. Types Basics
// **************************************************************************************************

// ==================================================================================================
// Task 02.01. Basic Types
// ==================================================================================================

// 02.01.01 ----------------------------------------------------------------------------------------
// 1.	Реалізуйте функцію getAllBooks(), яка повертає колекцію книжок. Об’явіть цю колекцію всередині функції.
// -------------------------------------------------------------------------------------------------


// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
// };

// function getAllBooks(): Book[] {
//     const books: Book[] = [
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
//     ];
//     return books;
// }

// type Books = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
// }[];

// function getAllBooks(): Books {
//     const books: Books = [
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
//     ];
//     return books;
// }
// console.log(getAllBooks());


// 02.01.02 ----------------------------------------------------------------------------------------
// 2.	Реалізуйте функцію logFirstAvailable(), яка приймає масив книг як параметр і виводить у консоль:
//    a.	кількість книг у масиві
//    b.	назву першої доступної книги
// -------------------------------------------------------------------------------------------------

function logFirstAvailable(books: Books): void {
    console.log(`Number of books: ${books.length}`);

    // const title = books.find(book => book.available === true)?.title;
    // Деструктуризація
    const title = books.find( ({available}) => available )?.title;
    console.log(`First available book: ${title}`);
}

// 02.01.03 ----------------------------------------------------------------------------------------
// 3.	Запустіть функцію logFirstAvailable()
// -------------------------------------------------------------------------------------------------

logFirstAvailable(getAllBooks());

// 02.01.04 ----------------------------------------------------------------------------------------
// 4.	Об’явіть enum Category для зберігання наступних категорій книг:
//      a.	JavaScript
//      b.	CSS
//      c.	HTML
//      d.	TypeScript
//      e.	Angular
// -------------------------------------------------------------------------------------------------

enum Category { JavaScript, CSS, HTML, TypeScript, Angular};

type Books = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}[];

// 02.01.05 ----------------------------------------------------------------------------------------
// 5.	Додайте категорію до об'єктів у функції getAllBooks()
// -------------------------------------------------------------------------------------------------

function getAllBooks(): Books {
    const books: Books = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

// 02.01.06 ----------------------------------------------------------------------------------------
// 6.	Реалізуйте функцію getBookTitlesByCategory(), яка на вхід отримує категорію та повертає масив найменувань книг, що належать зазначеній категорії.
// -------------------------------------------------------------------------------------------------

function getBookTitlesByCategory(inputCategory: Category): string[] {
    const books = getAllBooks();

    const titles = books
        .filter(book => book.category === inputCategory)
        .map(book => book.title);
    return titles;

    // Деструктуризация
    // return books
    //     .filter( ({category}) => category === inputCategory )
    //     .map( ({ title }) => title);
}

// 02.01.07 ----------------------------------------------------------------------------------------
// 7.	Реалізуйте функцію logBookTitles(), яка приймає масив рядків та виводить його в консоль.
// Викличте функції getBookTitlesByCategory() та logBookTitles().
// -------------------------------------------------------------------------------------------------

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}