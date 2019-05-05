class Employee {
    constructor(name, title, salary) {
      this.name = name;
      this.title = title;
      this.salary = salary;
      this.boss = null;
      this.subordinates = [];
    }
  }