class Employee {
    constructor(name, title, salary) {
      this.name = name;
      this.title = title;
      this.salaray = salary;
      this.boss = null;
      this.subordinates = [];
    }
  
    addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
    }
  
get numberOfSubordinates() {
    return this.subordinates.length;
    }
  
get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
  
    while (currentEmployee.boss) {
    currentEmployee = currentEmployee.boss;
    numberOfPeople ++;
    }
  
    return numberOfPeople
    }
  
    hasSameBoss(employee) {
    return this.boss === employee.boss;
    }
  }
  
  const ada = new Employee("Ada", "CEO", 30000000.00);
  
  const craig = new Employee("Craig", "VP Software", 1000000);
  const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
  const angela = new Employee("Angela", "VP Retail", 1000000);
  const phil = new Employee("Phil", "VP Marketing", 1000000);
  
  ada.addSubordinate(craig);
  ada.addSubordinate(arvinder);
  ada.addSubordinate(angela);
  ada.addSubordinate(phil);
  
  console.log(craig.boss);
  console.log(craig.numberOfSubordinates);
  console.log(craig.numberOfPeopleToCEO);