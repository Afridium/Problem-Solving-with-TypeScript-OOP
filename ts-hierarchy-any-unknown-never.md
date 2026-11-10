# any, unknown and never in TypeScript

## Introduction

TypeScript has three special types which are `any`, `unknown` and `never`. Each has a different spot of the type hierarchy in TypeScript. `unknown` is the top type means every value fits into it, `never` is the bottom type which means no value fits into it, and `any` breaks the rules of both.

## any

`any` turns off type checking completely.

```ts
let age: any = 25;
age.toUpperCase(); //no error will show while writting code but will crash at runtime
```

## unknown

`unknown` accepts any value as well, but the type has to be checked before use.

```ts
let greeting: unknown = "hello";
// greeting.toUpperCase(); // will show error while writting code
if (typeof greeting === "string") {
  greeting.toUpperCase(); // will work fine
}
```

## never

`never` is for values that can never happen, like the return type of a function that is a `throw`.

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

## Why unknown is preferred

`any` hides bugs because any type of value is allowed. `unknown` forces a check first, so mistakes get caught while writing code instead of during runtime.

## Conclusion

`unknown` is the safe version of `any`, and `never` marks impossible cases. Reaching for `unknown` whenever a type is not known keeps the code working.