# Type Narrowing in TypeScript

## Introduction

A variable in TS may hold more than one types, like as example `string | number`. According to the TypeScript rules, TypeScript only allows operations that are safe for every possible type. Type narrowing means checking the type inside the written code so that TypeScript treats the variable more specifically.

## typeof

`typeof` works for primitives like `string` and `number`.

```ts
function double(value: string | number) {
  if (typeof value === "number") {
    return value * 2;      // number
  }
  return value;  // string
}
```

## instanceof

`instanceof` work for classes, it checks what a value was created from.

```ts
function format(input: string | Date) {
  if (input instanceof Date) {
    return input.toISOString(); // Date
  }
  return input.toLowerCase();   // string
}
```

## in operator

`in` operator's work is to check whether a property exists on an object.

```ts
interface Fish { swim(): void }
interface Bird { fly(): void }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish
  } else {
    animal.fly();  // Bird
  }
}
```

## Conclusion

Narrowing makes union types safe and easy to work with. `typeof` works with primitives, `instanceof` works with classes, and `in` works with plain objects.