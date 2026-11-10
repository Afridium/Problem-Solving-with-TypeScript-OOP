# Combining Union and Intersection Types in TypeScript

## Introduction

A union type (`|`) means a value can be one of many types. An intersection type (`&`) means a value must have all the properties of many types combined.
## Union: one or the other

```ts
type EmailLogin = { email: string };
type UsernameLogin = { username: string };

type Login = EmailLogin | UsernameLogin;

const user1: Login = { email: "test@gmail.com" };
const user2: Login = { username: "rakib123" };
```

A response is either a success or a failure, but never both.

## Intersection: all together

```ts
type PersonalInfo = {
    name: string;
    age: number;
};

type AccountInfo = {
    email: string;
    password: string;
};

type User = PersonalInfo & AccountInfo;

const user: User = {
    name: "Rakib",
    age: 25,
    email: "rakib@gmail.com",
    password: "123456"
};
```

Every response now also carries a `createdAt` field. TypeScript spreads the intersection over each union member, so the result is `(Success & Timestamps) | (Failure & Timestamps)`.

## Using the combined type

```ts
type BasicInfo = {
    name: string;
    email: string;
};

type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    purchaseCount: number;
};

type User = BasicInfo & (Admin | Customer);

const user1: User = {
    name: "Rakib",
    email: "rakib@gmail.com",
    role: "admin",
    permissions: ["read", "write"]
};

const user2: User = {
    name: "Sadia",
    email: "sadia@gmail.com",
    role: "customer",
    purchaseCount: 5
};
```

## Conclusion

Unions describe choices and intersections add shared properties. Mixing both keeps the types short, avoids repeating fields, and still gives safe narrowing.