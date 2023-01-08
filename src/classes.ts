/* eslint-disable no-underscore-dangle */
import * as Interfaces from './interfaces';

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


class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    // a: number;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

export { UniversityLibrarian, ReferenceItem };