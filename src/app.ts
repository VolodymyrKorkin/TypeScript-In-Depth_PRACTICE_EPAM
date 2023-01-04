/* eslint-disable no-redeclare */

// Greeting (check if webpack works)
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// **************************************************************************************************
// 01. TypeScript In-Depth
// **************************************************************************************************


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

// logFirstAvailable(getAllBooks());

// 02.01.04 ----------------------------------------------------------------------------------------
// 4.	Об’явіть enum Category для зберігання наступних категорій книг:
//      a.	JavaScript
//      b.	CSS
//      c.	HTML
//      d.	TypeScript
//      e.	Angular
// -------------------------------------------------------------------------------------------------

enum Category {JavaScript, CSS, HTML, TypeScript, Angular};

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
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));


// 02.01.08 ----------------------------------------------------------------------------------------
// 8.	Реалізуйте функцію getBookAuthorByIndex(), яка приймає index книжки у масиві та повертає пару: назву книжки + автор.
// Використовуйте tuple для типу, що повертається. Викличте цю функцію.
// -------------------------------------------------------------------------------------------------

// function getBookAuthorByIndex(index: number): [string, string] {
//     const books = getAllBooks();

//     const { title, author } = books[index];

//     return [title, author];
// }
// console.log(getBookAuthorByIndex(0));

// 02.01.09 ----------------------------------------------------------------------------------------
// 9.	Внесіть зміни до типу, що повертається функцією getBookAuthorByIndex() – додайте мітки: title, author для типу tuple
// -------------------------------------------------------------------------------------------------

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];

    return [title, author];
}
// console.log(getBookAuthorByIndex(0));

// 02.01.10 ----------------------------------------------------------------------------------------
// 10.	Реалізуйте функцію calcTotalPages(), яка підраховує кількість сторінок книг у трьох бібліотеках міста, використовуючи такі дані:
//     [
//     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//     ];
// Для підрахунків використовуйте тип bigint
// -------------------------------------------------------------------------------------------------

function calcTotalPages(): void {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result = data.reduce((acc: bigint, obj ) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(result);
}


// ==================================================================================================
// Task 02.02. Const Assertions
// ==================================================================================================

// 02.02.01 ----------------------------------------------------------------------------------------
// 1.	Додайте const assertions (<const>) для масиву книг та масиву,
// який надає інформацію про сторінки книг у бібліотеках міста.
// -------------------------------------------------------------------------------------------------
type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function getAllBooks2(): readonly Book[] {
    const books2 = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books2;
}

// 02.02.02 ----------------------------------------------------------------------------------------
// 2.	Додайте модифікатор readonly для параметра функції logFirstAvailable()
// -------------------------------------------------------------------------------------------------
function logFirstAvailable2(books: readonly Book[]): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true)?.title;
    console.log(`First available book: ${title}`);
}


// **************************************************************************************************
// 03. Functions
// **************************************************************************************************


// ==================================================================================================
// Task 03.01. Function Type
// ==================================================================================================


// 03.01.01 -------------------------------------------------------------------------------------------
// 1.	Створіть функцію createCustomerID(), яка приймає ім'я клієнта (name: string)
// та його ідентифікатор (id: number) та повертає конкатенацію цих значень у вигляді рядка.
// -------------------------------------------------------------------------------------------------

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

// 03.01.02 -------------------------------------------------------------------------------------------
// 2.	Об’явіть змінну myID рядкового типу та викличте функцію зі значеннями Ann, 10.
// Отримане значення виведіть у консоль.
// -------------------------------------------------------------------------------------------------

const myID: string = createCustomerID('Ann', 10);
// console.log(myID); // 10/Ann

// 03.01.03 -------------------------------------------------------------------------------------------
// 3.	Об’явіть змінну idGenerator і вкажіть тип функції createCustomerID().
// Надайте цій змінній функціональний вираз, використовуючи стрілочну функцію.
// Тіло подібне до функції createCustomerID().
// -------------------------------------------------------------------------------------------------

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID; // typeof в позиції типу
// const a = typeof createCustomerID; // typeof в позиції значення
// console.log (a); // 'function'
idGenerator = (name: string, id: number) => `${id}/${name}`;


// 03.01.04 -------------------------------------------------------------------------------------------
// 4.	Надайте змінній idGenerator функцію createCustomerID() та викличте її. Отримане значення виведіть у консоль.
// -------------------------------------------------------------------------------------------------

idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20)); // 20/Boris


// ==================================================================================================
// Task 03.02. Optional, Default and Rest Parameters
// ==================================================================================================


// 03.02.01 -------------------------------------------------------------------------------------------
// 1.	Створіть функцію createCustomer(), яка приймає три параметри:
//  a)	name: string – обов'язковий
//  b)	age: number – необов'язковий
//  c)	city: string – необов'язковий
// Функція повинна виводити ім'я клієнта в консоль, а також,
// якщо заданий вік, вона повинна додатково виводити вік у консоль.
// Якщо задане місто, то додатково має виводити місто у консоль.
// Викличте цю функцію з одним, двома та трьома аргументами.
// -------------------------------------------------------------------------------------------------

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');


// 03.02.02 -------------------------------------------------------------------------------------------
// 2.	Внесіть зміни до функції getBookTitlesByCategory()
// – додайте для параметра значення за замовчуванням Category.JavaScript.
// Викличте цю функцію без аргументів.
// -------------------------------------------------------------------------------------------------

function getBookTitlesByCategory2(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    const titles = books
        .filter(book => book.category === inputCategory)
        .map(book => book.title);
    return titles;
}

// console.log(getBookTitlesByCategory2());

// 03.02.03 -------------------------------------------------------------------------------------------
// 3.	Внесіть зміни до функції logFirstAvailable() –
// додайте для параметра значення за замовчуванням – виклик функції getAllBooks().
// Викличте цю функцію без аргументів.
// -------------------------------------------------------------------------------------------------

function logFirstAvailable3(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true)?.title;
    console.log(`First available book: ${title}`);
}
// logFirstAvailable3();


// 03.02.04 -------------------------------------------------------------------------------------------
// 4.	Створіть функцію getBookByID(), яка приймає id книжки та повертає книжку.
// Використовуйте функцію getAllBooks(), метод масиву find() та стрілочну функцію.
// Викличте функцію та передайте їй 1.
// -------------------------------------------------------------------------------------------------

function getBookByID(id: number): Book {
    const books = getAllBooks();

    return books.find(book => book.id === id);
}
// console.log(getBookByID(1));


// 03.02.05 -------------------------------------------------------------------------------------------
// 5.	Створіть функцію сheckoutBooks(), яка приймає два параметри:
//      a.	customer: string
//      b.	bookIDs: number[] – змінне значення ідентифікаторів книжок (рест параметр)
// Функція повинна перевірити доступність кожної книжки, заданої ідентифікатором, та повернути масив найменувань (title) книжок, які є доступними.
// (available = true). Використовуйте функцію getBookById(). Також функція повинна виводити в консоль ім'я заданого клієнта.
// -------------------------------------------------------------------------------------------------

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log(`Customer: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}
// console.log(сheckoutBooks('NoName Customer', 1, 3, 4));
// console.log(сheckoutBooks('NoName Customer', ...[1, 3, 4]));


// 03.02.06 -------------------------------------------------------------------------------------------
// 6.	Об’явіть змінну myBooks та збережіть у ній результат виклику функції
// сheckoutBooks('Ann', 1, 2, 4). Виведіть результат у консоль.
// -------------------------------------------------------------------------------------------------

const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);



// ==================================================================================================
// Task 03.03. Function Overloading
// ==================================================================================================

// 03.03.01 -------------------------------------------------------------------------------------------
// 1.	Додайте в першому рядку app.ts опцію для ESLint /* eslint-disable no-redeclare */.
// Ця опція необхідна для оголошення кількох сигнатур функцій з однаковими іменами
// -------------------------------------------------------------------------------------------------



// 03.03.02 ----------------------------------------------------------------------
// 2.	Створіть функцію getTitles(), яка може приймати 1 або 2 параметри:
//      a.	якщо функція приймає 1 параметр, він може бути або string (author), або boolean (available)
//      b.	якщо функція приймає 2 параметри, вони повинні бути id та available.
// Функція повинна повертати масив книг за автором, чи за доступністю, чи за id та доступністю.
// Для реалізації функції створіть три сигнатури з різними типами параметрів
// та реалізацію з рест параметром типу any[] або unknown[] або [string | boolean] | [number, boolean].
// Функція повинна аналізувати кількість і типи параметрів за допомогою оператора typeof і формувати результуючий масив з масиву,
// отриманого за допомогою функції getAllBooks(), аналізуючи властивості: book.author, book.available, book.id.
// -------------------------------------------------------------------------------------------------

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg)
                .map(book => book.title);

        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg)
                .map(book => book.author);
        }

    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available)
                .map(book => book.author);
        }
    }
}
// console.log(getTitles(1, true)); // ['Evan Burchard']0: "Evan Burchard"length: 1[[Prototype]]: Array(0)


// 03.03.03 ----------------------------------------------------------------------
// 3.	Оголосіть змінну checkedOutBooks та викличте функцію getTitles(false).
// Виведіть результат у консоль.
// -------------------------------------------------------------------------------

const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks); // ['Liang Yuxian Eugene']0: "Liang Yuxian Eugene"length: 1[[Prototype]]: Array(0)

