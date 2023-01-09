// ==================================================================================================
// Task 06.05. Dynamic Import Expression
// ==================================================================================================
import { Book } from '../interfaces';

export class Reader {
    name: string;
    book: Book[] = [];

    take(book: Book): void {
        this.book.push(book);
    }
}

