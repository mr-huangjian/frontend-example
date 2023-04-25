class Student {
  fullName: string;
  // public firstName: string; 
  // 表示在构造函数的参数上使用public等同于创建了同名的成员变量。
  // 即 this.firstName = firstName;
  
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    console.log('this.firstName:',this.firstName);
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
