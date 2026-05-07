# OOP in TypeScript (Student-Friendly): 4 Pillars With One Example

## Introduction

OOP is easier when you see all four pillars working together in a single piece of code.

The example below models a school where everyone is a `SchoolMember`, but students and teachers do different work.

## Body

### Body Paragraph 1: One Example Code (All Pillars Together)

```ts
abstract class SchoolMember {
  constructor(public name: string, public age: number) {}

  abstract performDuty(): string;
}

class Student extends SchoolMember {
  private _grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this._grade = grade;
  }

  public getGrade(): string {
    return this._grade;
  }

  public setGrade(newGrade: string): void {
    const validGrades = ["A", "B", "C", "D", "F"];
    if (validGrades.includes(newGrade)) {
      this._grade = newGrade;
    } else {
      console.log("Invalid grade entered!");
    }
  }

  performDuty(): string {
    return `${this.name} is studying for the exams.`;
  }
}

class Teacher extends SchoolMember {
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }

  performDuty(): string {
    return `${this.name} is grading ${this.subject} assignments.`;
  }
}

const schoolRoster: SchoolMember[] = [
  new Student("Alice", 20, "A"),
  new Teacher("Mr. Smith", 45, "Mathematics"),
  new Student("Bob", 19, "B"),
];

console.log("--- School Day Begins ---");

schoolRoster.forEach((member) => {
  console.log(member.performDuty());
});

const alice = schoolRoster[0] as Student;
alice.setGrade("A+");
console.log(`Alice's grade stays: ${alice.getGrade()}`);
```

### Body Paragraph 2: Where Each Pillar Appears

**1. Abstraction**

`SchoolMember` is `abstract`. It says: every school member must have `performDuty()`. It does not say how.

**2. Inheritance**

`Student extends SchoolMember` and `Teacher extends SchoolMember`. They reuse `name` and `age` from the parent.

**3. Encapsulation**

`Student` keeps `_grade` as `private`. Outside code cannot change it directly. You must use `setGrade`, which validates input.

**4. Polymorphism**

`schoolRoster` is typed as `SchoolMember[]`, but it contains both `Student` and `Teacher`. When you call `member.performDuty()`, TypeScript/JS runs the correct version automatically based on the actual object.

### Body Paragraph 3: Why This Helps in Large Projects

- You add new roles (like `Principal`) by creating a new class, without rewriting the loop.
- Rules stay inside the class that owns the data (like grade validation inside `Student`).
- Code depends on the abstract contract (`SchoolMember`), not specific implementations.

## Conclusion

In short: Abstraction defines the contract, inheritance shares common parts, encapsulation protects data, and polymorphism lets one loop work with many types.

References:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://en.wikipedia.org/wiki/Object-oriented_programming
