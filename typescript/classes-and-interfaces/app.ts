// classes

class Department {
  name: string;

  //constructor method
  constructor(n: string) {
    this.name = n;
  }
}

//create instance of class
const shipping = new Department("Shipping");

console.log(shipping);
