# type vs interface in TypeScript

## Introduction

`type` and `interface` both describes the shape of data in TypeScript. At first they look almost the same for plain objects, but there are some differences that says which one fits better.

## Same job for objects

```ts
interface User { id: number; name: string; }
type UserType = { id: number; name: string; };
```

Any of these two can be used to describe a variable. No difference can be caught here.

## Extending

When we use `interface` we can use `extends`, but for a `type` we cant use it like this. A `type` uses `&` (intersection).

```ts
interface Animal { name: string; }
interface Dog extends Animal { bark(): void; }

type Cat = Animal & { meow(): void };
```

## Declaration merging

If we declare `interface` with same name twice, it merges both into one and act as the same `interface`. But if we do it with `type` we get an error.

```ts
interface Car { brand: string; }
interface Car { year: number; }
// Car now needs both brand and year
```

## type can describe more

`interface` can only describes object shapes. But `type` can also name unions, tuples and primitives.

```ts
type ID = string | number; //this is union
type Point = [number, number]; //this is a tuple
```

## When to choose which

- `interface` should be used when we need to work with object shapes, class contracts, and anything that may need merging later.
- `type` should be used when we need to work with unions, tuples, and other non-object types.

## Conclusion

For simple objects, both work fine. The real differences are merging (only `interface`) and flexibility (only `type`). So we need to pick based on the requirements.