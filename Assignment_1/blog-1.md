# How TypeScript Generics Enable Reusable Code Without Losing Type Safety

## Introduction

When you want to reuse code across different data shapes, you often face a tradeoff: either hard-code types (not reusable), or loosen types with `any` (reusable but unsafe). TypeScript generics solve this by letting you write code once while preserving the caller’s exact types at each usage.

In other words: generics make code reusable, but still strictly typed, regardless of which data structure is passed in.

## Body

### Body Paragraph 1: The Core Idea (Type Parameters Preserve the Caller’s Type)

A generic function takes a *type parameter* like `<T>`. TypeScript infers `T` from the argument you pass in, and then uses that same `T` for the return type.

```ts
// Without generics: you lose information
function identityAny(value: any) {
  return value;
}

const a = identityAny("hello");
// a is any -> no strict typing, mistakes slip through

// With generics: you preserve the exact type
function identity<T>(value: T): T {
  return value;
}

const s = identity("hello"); // s: string
const n = identity(123);      // n: number
```

Why this stays strictly typed:

- `T` is not a fixed type; it is a placeholder.
- At each call site, TypeScript infers `T` from the input.
- The return type becomes that exact inferred type, not a widened/unsafe type.

### Body Paragraph 2: Working With Data Structures (Arrays, Objects, and Inference)

Generics scale to data structures. You can write one implementation that works for many shapes, while still keeping precise types.

```ts
// Reusable for any array element type
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const x = first([10, 20, 30]);        // x: number | undefined
const y = first(["a", "b", "c"]);     // y: string | undefined

// Reusable for any object shape, with key safety
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John", active: true };
const name = getProperty(user, "name"); // name: string

// getProperty(user, "email"); // Compile-time error: "email" is not a key of user
```

Two important pieces are doing the work here:

- `K extends keyof T` forces the `key` to be a real key of the object.
- `T[K]` computes the value type for that key, so the return type is exact.

### Body Paragraph 3: Constraining Generics (Reusable, But With Rules)

Sometimes you want reusability, but only for values that meet certain requirements. Constraints let you keep strict typing while still being generic.

```ts
// Constraint: T must have a length property
function describeLength<T extends { length: number }>(value: T): string {
  return `Length is ${value.length}`;
}

describeLength("typescript");     // ok
describeLength([1, 2, 3]);        // ok
// describeLength(123);           // error: number has no length
```

This pattern is a big reason generic utilities feel safe: you get flexibility, but you also encode the minimum requirements.

### Body Paragraph 4: Reusable Components (Generic Props)

The same idea applies to components: you can make the component reusable while preserving the specific item type.

```ts
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => string;
};

function renderList<T>(props: ListProps<T>): string {
  return props.items.map(props.renderItem).join("\n");
}

const out = renderList({
  items: [{ id: 1, name: "Ada" }],
  renderItem: (u) => `${u.id}: ${u.name}`,
});

// If you typo a property in renderItem, TypeScript flags it:
// renderItem: (u) => u.fullName  // error: Property 'fullName' does not exist
```

Here, `T` becomes `{ id: number; name: string }` automatically from `items`, and that exact type flows into `renderItem`.

## Conclusion

Generics keep code reusable and strictly typed by capturing the caller’s types in a type parameter (like `T`) and threading that type through inputs, outputs, and callbacks. With inference, `keyof`/indexed access types (`T[K]`), and constraints (`extends`), you can write one implementation that works across many data structures without falling back to `any`.
