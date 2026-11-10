# Generics and Promise<T> in TypeScript

## Introduction

Generics let a function or type work with many types without losing type safety. A placeholder like `T` stands in for the real type such as string, number, boolean or custom types, which gets filled in when the function is used.

## Basic generic function

```ts
function wrap<T>(value: T): T {
  return value;
}

wrap(5);   // T becomes number
wrap("hi");// T becomes string
```

## Promise<T>

`Promise<T>` is a generic type too. `T` is the type of the value the promise resolves to.

```ts
interface User { id: number; name: string; }

async function getUser(): Promise<User> {
  const res = await fetch("/api/user");
  return res.json();
}
```

After `await`, the result is known to be a `User`, so autocomplete and error checking work.

## Reusable fetch helper

A generic helper helps to avoid repeating the same code for every API call.

```ts
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

const user = await fetchData<User>("/api/user");   // User
const posts = await fetchData<string[]>("/api/posts"); // string[]
```

## Conclusion

Generics make one function work for many types, and `Promise<T>` keeps async results typed.