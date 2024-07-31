class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const shipping = new Department("Shipping");

console.log(shipping);
