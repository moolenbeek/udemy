class Department {
  private employees: string[] = [];

  constructor(private id: number, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const shipping = new Department(225, "Shipping");

shipping.addEmployee("Bob");
shipping.addEmployee("Joe");

shipping.describe();
shipping.printEmployeeInformation();

console.log(shipping);
