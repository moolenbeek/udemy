// classes

class Department {
  name: string;

  //constructor method
  constructor(n: string) {
    this.name = n;
  }

  // method
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

//create instance of class
const shipping = new Department("Shipping");

console.log(shipping);

shipping.describe();

export {};