# TypeScript Assignment Solutions

This repo contains a set of small TypeScript exercises implemented in `solutions.ts`.

## Contents

`solutions.ts` includes the following functions/classes:

1. `filterEvenNumbers(numbers: number[]): number[]`
   Returns a new array containing only even numbers.

2. `reverseString(str: string): string`
   Reverses a string.

3. `checkType(input: string | number): "String" | "Number" | "Unknown"`
   Returns the runtime type label for the provided value.

4. `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`
   Type-safe property accessor using generics.

5. `toggleReadStatus(book: Book): Book & { isRead: true }`
   Returns a new book object with `isRead: true` added.

6. `Person` and `Student`
   `Student` extends `Person` and prints details via `getDetails()`.

7. `getIntersection(array_1: number[], array_2: number[]): number[]`
   Returns the intersection of two number arrays.

## Running

### Option A: Run directly with ts-node

1. Install dependencies:

```bash
npm init -y
npm i -D typescript ts-node
```

2. Execute:

```bash
npx ts-node solutions.ts
```

### Option B: Compile with TypeScript and run with Node

1. Install TypeScript:

```bash
npm init -y
npm i -D typescript
```

2. Compile and run:

```bash
npx tsc solutions.ts --target ES2020 --module commonjs
node solutions.js
```

## Expected Console Output

When you run `solutions.ts`, it currently logs results for problems 1, 3, 4, 5, 6, and 7:

```txt
[ 2, 4, 6 ]
Number
John Doe
{
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
  isRead: true
}
Name: Alice, Age: 20, Grade: A
[ 3, 4, 5 ]
```

Notes:

1. The `reverseString("typescript")` example is assigned to `r2` but not printed (the `console.log` is commented out).
