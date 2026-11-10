# Assignment: Problem Solving with TypeScript & OOP

I completed this assignment covering TypeScript concepts from Modules 1, 2, and 3. It had 8 coding problems (50 marks) in a single `solutions.ts` file, plus 2 technical blog posts (10 marks).

## Problems and Topics Covered

| # | Function / Class | Topics covered |
|---|---|---|
| 1 | `multiplyValue` | Optional parameters, default value logic, handling `0` correctly (not treating it as falsy) |
| 2 | `processInput` | Union types (`string \| number \| boolean`), type narrowing with `typeof`, explicit return types |
| 3 | `formatCoordinate` | Readonly tuples (`readonly [number, number, string]`), exact string formatting |
| 4 | `concatenateArrays` | Generics (`<T>`), rest parameters (`...arrays: T[][]`), no `any` |
| 5 | `Course` interface, `getPopularCourses` | Interfaces, array filtering, immutability (returning a new array) |
| 6 | `pluckValues` | Generics with the `keyof` constraint (`<T, K extends keyof T>`), indexed access types (`T[K][]`) |
| 7 | `Employee`, `Manager` | OOP, inheritance (`extends`, `super`), `protected` and `private` access modifiers |
| 8 | `validateAgeAsync` | Promises (`Promise<string>`), `setTimeout`, `async/await`, rejecting with `new Error(...)` |

## Coding Rules Followed

- Explicit parameter and return types on every function and method
- Exact function, interface, and class names from the problem descriptions
- Return values match the sample outputs exactly
- No `any`, no comments, no `console.log`

## Blog Writing

I completed writting technical blog posts on TypeScript topics:

- [Blog 01: type-vs-interface](./type-vs-interface.md)
- [Blog 02: ts-hierarchy-any-unknown-never](./ts-hierarchy-any-unknown-never.md)
- [Blog 03: type-narrowing](./type-narrowing.md)
- [Blog 04: generics](./generics.md)
- [Blog 05: access-modifiers](./access-modifiers.md)
- [Blog 06: typescript-under-hood](./typescript-under-hood.md)
- [Blog 07: combining-union-intersection](./combining-union-intersection.md)

Each post is 150 to 300 words, saved as its own Markdown file, and includes a title, introduction, body paragraphs with code examples, and a conclusion.

## File Structure

```text
├── solutions.ts
├── blog-name-1.md
├── blog-name-2.md
└── README.md
```