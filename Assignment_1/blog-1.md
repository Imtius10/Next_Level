# Generics in TypeScript: Reusable Code That Stays Strictly Typed

## Introduction

Generics let you write one function that works with many data shapes, while TypeScript still knows the exact types at each call.

Instead of hard-coding a type (or using `any`), you use type parameters like `<T>` and let TypeScript infer them from the input.

## Body

### Body Paragraph 1: Generic `getProperty` (Works for Any Object)

This function can read a property from any object, but it stays safe because the `key` must actually exist on that object.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const r5 = getProperty(user, "name");
console.log(r5); // "John Doe"

// getProperty(user, "email"); // compile error (email doesn't exist)
```

Why it stays strictly typed:

- `T` becomes the exact type of `user`.
- `K extends keyof T` restricts `key` to valid property names.
- `T[K]` returns the correct value type (here: `string`).

### Body Paragraph 2: A Similar Idea Without Generics (Simple Extension)

Not every reusable pattern needs generics. Sometimes you just return a predictable extension of a known interface.

```ts
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

console.log(toggleReadStatus(myBook));
```

This is still type-safe (because `Book` is explicit), but it is not “shape-agnostic”. If you wanted `toggleReadStatus` to work with any object that looks like a book (or any object at all), that is where generics become useful.

## Conclusion

Generics keep code reusable *and* strict by letting the compiler carry the caller’s types through your function:

- “One implementation, many shapes”
- no `any` needed
- compile-time errors for invalid keys/usage

Reference: https://www.typescriptlang.org/docs/handbook/2/generics.html
