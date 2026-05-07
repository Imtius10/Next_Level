



function filterEvenNumbers(numbers: Array<number>): Array<number> {
  const evenNumber: number[] = [];
  for (const num of numbers) {
    if (num % 2 == 0) {
      evenNumber.push(num);
    }
  }
  return evenNumber;
}





function reverseString(str: string): string {
  return str.split("").reverse().join("");
}





type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }

  return "Unknown";
}






function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};







interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}









class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}











function getIntersection(array_1: number[], array_2: number[]): number[] {
  const set = new Set(array_2);

  return array_1.filter((num) => set.has(num));
}


