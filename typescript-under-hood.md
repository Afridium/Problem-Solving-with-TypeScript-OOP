# What tsc Does and Why tsconfig.json Matters

## Introduction

Browsers and Node.js cannot run TypeScript directly. The TypeScript compiler, `tsc`, converts `.ts` files into plain JavaScript files and then the Browsers and Node.js can run it. So basically under the hood, TypeScript files are converted to JavaScript files. A file called `tsconfig.json` tells the compiler how to do the conversion.

## What happens during compilation

1. **Parsing:** the code is read and turned into a tree structure.
2. **Type checking:** types are verified and errors reported.
3. **Emitting:** JavaScript files are produced, and all types are removed.

```ts
// input: app.ts
const age: number = 20;
```

```js
// output: app.js
const age = 20;
```

Types exist only while writing code. None of them survive into the JavaScript output.

## Role of tsconfig.json

`tsconfig.json` is the configuration file that tells TypeScript how to compile and check the code. When `tsc` is run inside a project containing `tsconfig.json`, TypeScript follows the settings that are set in this file.

## Conclusion

`tsc` checks types and then removes them to produce JavaScript file. `tsconfig.json` tells TypeScript how to compile and check the code.