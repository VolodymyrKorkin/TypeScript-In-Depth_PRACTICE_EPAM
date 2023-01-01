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


type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
};

function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}