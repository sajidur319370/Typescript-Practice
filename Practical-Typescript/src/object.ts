type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employee: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employee" in staff) {
    console.log(
      `${staff.name} is the manager of ${staff.employee.length} employee of ${staff.employee[0].department}`
    );
  } else {
    console.log(`${staff.name} is the employee of ${staff.department}`);
  }
}

const rakib: Employee = { id: 1, name: "Rakib", department: "ICE" };
const sakib: Employee = { id: 2, name: "Sakib", department: "ECE" };
const Joynal: Manager = { id: 3, name: "Joynal", employee: [rakib, sakib] };

printStaffDetails(rakib);
printStaffDetails(Joynal);
printStaffDetails(sakib);

type Book = { name: string; price: number };
type discountBook = Book & { discount: number };

const book1: Book = { name: "JavaScript", price: 55 };
const book2: discountBook = { name: "JavaScript", price: 55, discount: 0.1 };

function discountPrice(book: discountBook | Book): void {
  console.log(book);
}

discountPrice(book1);
discountPrice(book2);
