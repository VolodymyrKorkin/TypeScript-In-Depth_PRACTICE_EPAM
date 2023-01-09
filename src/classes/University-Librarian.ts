import * as Interfaces from './../interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    // a: number;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

export { UniversityLibrarian };

