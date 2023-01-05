/* eslint-disable no-underscore-dangle */
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

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

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


// ==================================================================================================
// Task 03.04. Assertion Functions
// ==================================================================================================

// 03.04.01 ---------------------------------------------------------------------------------
// 1.	Створіть функцію-ствердження assertStringValue(), яка приймає один параметр типу any.
// Функція повинна перевіряти, чи є тип переданого аргументу рядком.
// Якщо ні, то генерувати виняток "value should have been a string".
// ------------------------------------------------------------------------------------------

function assertStringValue(data: any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('value should have been a string');
    }
}


// 03.04.02 ---------------------------------------------------------------------------------
// 2.	Створіть функцію bookTitleTransform(), яка приймає один параметр – назву книжки (тип параметру any).
// За допомогою assertStringValue перевіряє, чи назва книжки дійсно є рядком,
// і якщо так, то повертає перевертень цього рядка, використовуючи спред оператор
// і методи масиву reverse() і join().
// ------------------------------------------------------------------------------------------

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}


// 03.04.03 ---------------------------------------------------------------------------------
// 3.	Викличте функцію bookTitleTransform() двічі і передайте їй рядкове та числове значення.
// ------------------------------------------------------------------------------------------

// console.log(bookTitleTransform('Learn TypeScript')); // tpircSepyT nraeL
// console.log(bookTitleTransform(123)); // Uncaught Error: value should have been a string



// **************************************************************************************************
// 04. Interfaces
// **************************************************************************************************


// ==================================================================================================
// Task 04.01. Defining an Interface
// ==================================================================================================


// 04.01.01 ---------------------------------------------------------------------------------
// 1.	Оголосіть інтерфейс Book, який включає такі поля:
//      a.	id - число
//      b.	title - рядок
//      c.	author - рядок
//      d.	available - логічний
//      e.	category – категорія
// ------------------------------------------------------------------------------------------

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

// 04.01.02 ---------------------------------------------------------------------------------
// 2.	Внесіть зміни в функцію getAllBooks(), вкажіть тип змінної books і тип значення,
// що повертається, використовуючи оголошений вище інтерфейс Book. Додайте модифікатор readonly.
// Видаліть тимчасово id у книжки та побачите, що з'явиться помилка.
// ------------------------------------------------------------------------------------------

function getAllBooks3(): readonly Book[] {
    const books2 = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books2;
}


// 04.01.03 ---------------------------------------------------------------------------------
// 3.	Внесіть зміни в функцію getBookByID(), вкажіть тип Book['id'] для параметра id,
// а також вкажіть тип значення, що повертається, використовуючи оголошений вище інтерфейс Book.
// Можливо, доведеться додати об'єднання з типом undefined, оскільки метод find, якщо не знайде елемент, поверне undefined.
// ------------------------------------------------------------------------------------------

function getBookByID2(id: Book['id']): Book | undefined {
    const books = getAllBooks();

    return books.find(book => book.id === id);
}


// 04.01.04 ---------------------------------------------------------------------------------
// 4.	Створіть функцію printBook(), яка на вхід приймає книгу та виводить у консоль фразу
// book.title + by + book.author. Використайте інтерфейс Book для типу параметра.
// ------------------------------------------------------------------------------------------

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}


// 04.01.05 ---------------------------------------------------------------------------------
// 5.	Оголосіть змінну myBook і надайте їй наступний об'єкт
// {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3
// }
// ------------------------------------------------------------------------------------------

// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3
// };


// 04.01.06 ---------------------------------------------------------------------------------
// 6.	Викличте функцію printBook() та передайте їй myBook.
// Жодних помилок при цьому не повинно з'являтися.
// ------------------------------------------------------------------------------------------

// printBook(myBook); // Colors, Backgrounds, and Gradients by Eric A. Meyer


// 04.01.07 ---------------------------------------------------------------------------------
// 7.	Додайте до інтерфейсу Book властивість pages: number.
// Ви отримаєте помилку у функції getAllBooks().
// Щоб помилка не виникала, зробіть властивість необов'язковою.
// ------------------------------------------------------------------------------------------

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}


// 04.01.08 ---------------------------------------------------------------------------------
// 8.	Вкажіть явно для змінної myBook тип Book. Ви знову отримаєте помилку.
// Видаліть властивості year, copies. Додайте властивість pages: 200.
// ------------------------------------------------------------------------------------------

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200
// };


// 04.01.09 ---------------------------------------------------------------------------------
// 9.	Додайте в інтерфейс Book необов'язкову властивість markDamaged, яка є методом.
// Метод приймає на вхід рядковий параметр reason і нічого не повертає.
// Додайте цей метод до myBook. Метод повинен виводити рядок
// `Damaged: ${reason}`. Викличте цей метод та передайте рядок 'missing back cover'.
// ------------------------------------------------------------------------------------------

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void; // property
    // markDamaged?(reason: string): void; // (method)
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
    // markDamaged(reason: string) {
    //     console.log(`Damaged: ${reason}`);
    // }
};
// myBook.markDamaged('missing back cover'); // Damaged: missing back cover



// ==================================================================================================
// Task 04.02. Defining an Interface for Function Types
// ==================================================================================================

// 04.02.01 ---------------------------------------------------------------------------------
// 1.	Оголосіть інтерфейс DamageLogger, який описуватиме тип функції,
// яка приймає один рядковий параметр і нічого не повертає.
// ------------------------------------------------------------------------------------------
interface DamageLogger {
    (reason: string): void;
}


// 04.02.02 ---------------------------------------------------------------------------------
// 2.	Внесіть зміни до інтерфейсу Book:
// використовуйте оголошений інтерфейс DamageLogger для поля markDamaged.
// ------------------------------------------------------------------------------------------
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // property
    // markDamaged?(reason: string): void; // (method)
    markDamaged?: DamageLogger;
}


// 04.02.03 ---------------------------------------------------------------------------------
// 3.	Оголосіть змінну logDamage, використовуючи оголошений раніше інтерфейс DamageLogger.
// Створіть функцію, яка задовольняє цьому інтерфейсу, і надайте її оголошеній змінній. Викличте функцію.
// ------------------------------------------------------------------------------------------

const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover'); // Damaged: missing back cover


// ==================================================================================================
// Task 04.03. Extending Interface
// ==================================================================================================


// 04.03.01 ---------------------------------------------------------------------------------
// 1.	Оголосіть інтерфейс Person, який містить дві рядкові властивості – name і email.
// ------------------------------------------------------------------------------------------

interface Person {
    name: string;
    email: string;
}


// 04.03.02 ---------------------------------------------------------------------------------
// 2.	Оголосіть інтерфейс Author на основі інтерфейсу Person, який розширює вказаний інтерфейс
// числовою властивістю numBooksPublished.
// ------------------------------------------------------------------------------------------

interface Author extends Person {
    numBooksPublished: number;
}


// 04.03.03 ---------------------------------------------------------------------------------
// 3.	Оголосіть інтерфейс Librarian на основі інтерфейсу Person, який розширює цей інтерфейс двома властивостями:
//      a.	Рядкова властивість department
//      b.	Функція assistCustomer, яка приймає два рядкові параметри custName і bookTitle і нічого не повертає.
// ------------------------------------------------------------------------------------------

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}


// 04.03.04 ---------------------------------------------------------------------------------
// 4.	Оголосіть змінну favoriteAuthor, використовуючи інтерфейс Author, задайте значення у вигляді літерала об'єкта.
// ------------------------------------------------------------------------------------------

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'Anna@example.com',
    numBooksPublished: 2
};


// 04.03.05 ---------------------------------------------------------------------------------
// 5.	Оголосіть змінну favoriteLibrarian, використовуючи інтерфейс Librarian,
// задайте значення у вигляді літерала об'єкта.
// ------------------------------------------------------------------------------------------

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// };


// ==================================================================================================
// Task 04.04. Optional Chaining
// ==================================================================================================


// 04.04.01 ---------------------------------------------------------------------------------
// 1.	Оголосіть змінну offer наступного виду:
// const offer: any = {
//      book: {
//          title: 'Essential TypeScript',
//      },
// };
// ------------------------------------------------------------------------------------------

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};


// 04.04.02 ---------------------------------------------------------------------------------
// 2.	Виведіть у консоль значення таких виразів, використовуючи оператор optional chaining (?.)
// a.	offer.magazine
// b.	offer.magazine.getTitle()
// c.	offer.book.getTitle()
// d.	offer.book.authors[0]
// ------------------------------------------------------------------------------------------

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);



// ==================================================================================================
// Task 04.05. Keyof Operator
// ==================================================================================================


// 04.05.01 ---------------------------------------------------------------------------------
// 1.	Оголосіть тип BookProperties, який включає властивості інтерфейсу Book, використовуючи keyof оператор.
// ------------------------------------------------------------------------------------------

type BookProperties = keyof Book;



// 04.05.02 ---------------------------------------------------------------------------------
// 2.	Реалізуйте функцію getProperty(), яка приймає два параметри:
//  a.	книжку
//  b.	назву властивості з інтерфейсу Book
// і повертає значення цієї властивості з переданого об'єкта, якщо це не функція, для функції повертає її ім'я. Використовуйте тип any для значення, що повертається.
// ------------------------------------------------------------------------------------------

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}



// 04.05.03 ---------------------------------------------------------------------------------
// 3.	Викличте цю функцію тричі зі значенням другого параметра: title, markDamaged, isbn.
// ------------------------------------------------------------------------------------------

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn')); // Error



// **************************************************************************************************
// 05. Classes
// **************************************************************************************************


// ==================================================================================================
// Task 05.01. Creating and Using Classes
// ==================================================================================================


// 05.01.01 ---------------------------------------------------------------------------------
// 1.	Створіть клас ReferenceItem, який містить:
//      a.	Рядкову властивість title
//      b.	Числову властивість year
//      c.	Конструктор з двома параметрами: рядковий параметр newTitle, числовий параметр newYear, який у консоль виводить рядок 'Creating a new ReferenceItem...' та ініціалізує властивості.
//      d.	Метод printItem() без параметрів, що нічого не повертає. Цей метод повинен  виводити рядок "title was published in year" в консоль.
// ------------------------------------------------------------------------------------------

// class ReferenceItem {
//     title: string;
//     year: number;

//     constructor(newTitle: string, newYear: number) {
//         console.log('Creating a new ReferenceItem...');
//         this.title = newTitle;
//         this.year = newYear;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }
// }


// 05.01.02 ---------------------------------------------------------------------------------
// 2.	Оголосіть змінну ref та проініціалізуйте її об'єктом ReferenceItem.
// Передайте значення для параметрів конструктора. Викличте метод printItem().
// ------------------------------------------------------------------------------------------

// const ref = new ReferenceItem('Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem(); // Learn TypeScript was published in 2022


// 05.01.03 ---------------------------------------------------------------------------------
// 3.	Закоментуйте конструктор, властивості title та year та реалізуйте створення властивостей
// через параметри конструктора (title - public, year - private).
// ------------------------------------------------------------------------------------------

// class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     constructor(
//         public title: string,
//         private year: number
//     ) {
//         console.log('Creating a new ReferenceItem...');
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }
// }

// const ref = new ReferenceItem('Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem(); // Learn TypeScript was published in 2022



// 05.01.04 ---------------------------------------------------------------------------------
// 4.	Створіть приватну (“soft private”) рядкову властивість _publisher.
//      a.	Додайте гетер publisher, який перетворює властивість
//  _publisher у верхній регістр і повертає його.
//      b.	Додайте сеттер publisher, який приймає рядковий параметр
//  newPublisher і встановлює значення властивості _publisher в значення цього параметра.
//      c.	Проініціалізуйте властивість ref.publisher будь-яким рядковим значенням
//  і виведіть його в консоль. Результат має бути у верхньому регістрі.
// ------------------------------------------------------------------------------------------

// class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     private _publisher: string;

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     constructor(
//         public title: string,
//         private year: number
//     ) {
//         console.log('Creating a new ReferenceItem...');
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }
// }

// const ref = new ReferenceItem('Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem(); // Learn TypeScript was published in 2022
// ref.publisher = 'abc group';
// console.log(ref.publisher); // ABC GROUP


// 05.01.05 ---------------------------------------------------------------------------------
// 5.	Створіть приватну (“hard private”) числову властивість id.
//      a.	Внесіть зміни до конструктора для ініціалізації цієї властивості.
//      b.	Додайте метод getID(), який повинен повертати значення властивості id.
//      c.	Виведіть об'єкт у консоль.
//      d.	Викличте метод getID().
// ------------------------------------------------------------------------------------------

// class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     #id: number;

//     private _publisher: string;

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     constructor(
//         id: number,
//         public title: string,
//         private year: number
//     ) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = id;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }

//     getID(): number {
//         return this.#id;
//     }
// }

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem(); // Learn TypeScript was published in 2022
// ref.publisher = 'abc group';
// console.log(ref.publisher); // ABC GROUP
// console.log(ref.getID());


// 05.01.06 ---------------------------------------------------------------------------------
// 6.	Створіть статичну рядкову властивість department і проініціалізуйте її будь-яким значенням за замовчуванням.
// Внесіть зміни до методу printItem() – виводьте значення цієї статичної властивості у консоль.
// ------------------------------------------------------------------------------------------

// class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     #id: number;

//     private _publisher: string;

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     static department: string = 'Research Dep.';

//     constructor(
//         id: number,
//         public title: string,
//         protected year: number
//     ) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = id;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);

//         console.log(ReferenceItem.department); // v1
//         console.log(Object.getPrototypeOf(this).constructor.department); // v2
//     }

//     getID(): number {
//         return this.#id;
//     }
// }

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem(); // Learn TypeScript was published in 2022
// ref.publisher = 'abc group';
// console.log(ref.publisher); // ABC GROUP
// console.log(ref.getID());


// ==================================================================================================
// Task 05.02. Extending Classes
// ==================================================================================================

// 05.02.01 ---------------------------------------------------------------------------------
// 1.	Створіть клас Encyclopedia як спадкоємця класу ReferenceItem. Додайте одну додаткову числову публічну властивість edition. Використайте параметри конструктора.
// ------------------------------------------------------------------------------------------

// class Encyclopedia extends ReferenceItem {
//     constructor(
//         id: number,
//         title: string,
//         year: number,
//         public edition: number
//     ) {
//         super(id, title, year);
//     }
// }


// 05.02.02 ---------------------------------------------------------------------------------
// 2.	Оголосіть змінну refBook та створіть об'єкт Encyclopedia. Викличте метод printItem();
// ------------------------------------------------------------------------------------------

// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);


// 05.02.03 ---------------------------------------------------------------------------------
// 3.	Перевизначте метод printItem(). Додайте ключове слово override. Нехай він робить те, що робив
// та додатково виводить рядок у консоль «Edition: edition (year)». Ви отримаєте помилку, що властивість year недоступна.
// Щоб властивість стала доступна, змініть модифікатор доступу в класі ReferenceItem з private на protected.
// ------------------------------------------------------------------------------------------

// class Encyclopedia extends ReferenceItem {
//     constructor(
//         id: number,
//         title: string,
//         year: number,
//         public edition: number
//     ) {
//         super(id, title, year);
//     }

//     override printItem(): void {
//         super.printItem();
//         console.log(`Edition: ${this.edition} (${this.year})`);
//     }
// }

// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);


// ==================================================================================================
// Task 05.03. Creating Abstract Classes
// ==================================================================================================


// ------------------------------------------------------------------------------------------
// 1.	Внесіть зміни до класу ReferenceItem – зробіть його абстрактним.
// 2.	Додайте абстрактний метод printCitation(), який не приймає параметрів і не повертає значення. Цей метод має бути без реалізації. Після цього Ви отримаєте помилку в класі Encyclopedia, яка повідомлятиме, що не реалізовано абстрактний метод.
// 3.	Додайте реалізацію методу printCitation до класу Encyclopedia. Метод повинен виводити в консоль рядок "title - year".
// 4.	Оголосіть змінну refBook та проініціалізуйте її об'єктом Encyclopedia. Викличте метод printCitation();
// ------------------------------------------------------------------------------------------

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected year: number
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);

        console.log(ReferenceItem.department); // v1
        console.log(Object.getPrototypeOf(this).constructor.department); // v2
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(
        id: number,
        title: string,
        year: number,
        public edition: number
    ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();


// ==================================================================================================
// Task 05.04. Interfaces for Class Types
// ==================================================================================================


// ------------------------------------------------------------------------------------------
// 1.	Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian та реалізуйте всі необхідні властивості. Метод assistCustomer повинен виводити в консоль рядок `${this.name} is assisting ${custName} with book ${bookTitle}`.
// 2.	Оголосіть змінну favoriteLibrarian за допомогою інтерфейсу Librarian і проініціалізуйте її за допомогою об'єкта, створеного класом UniversityLibrarian(). Жодних помилок при цьому не повинно виникати. Проініціалізуйте властивість name та викличте метод assistCustomer().
// ------------------------------------------------------------------------------------------

// interface A {
//     a: number;
// }
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    // a: number;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

const favoriteLibrarian: Librarian /* & A */ = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');
// favoriteLibrarian.a = 2;