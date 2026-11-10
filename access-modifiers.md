# Access Modifiers in TypeScript

## Introduction

Access modifiers control who can reach the properties and methods of a class. TypeScript has `public`, `private`, `protected` and `readonly` access modifiers which helps to keep data safe and the code easier to maintain.

## The four modifiers

- `public`: accessible from anywhere also the default one.
- `private`: accessible only inside the same class.
- `protected`: accessible inside the class and its subclasses.
- `readonly`: can be set once then never changed.

## Example

```ts
class Account {
  public owner: string;
  private balance: number;
  protected id: number;
  readonly createdAt: Date = new Date();

  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }
}

const acc = new Account("Rahim", 500, 1);
acc.owner;              // this will work and no error will be shown since its public
// acc.balance;         // will show error because balance is private
// acc.id;              // error because id is protected
// acc.createdAt = new Date(); // error because it is readonly
```

## protected in a subclass

```ts
class Savings extends Account {
  showId() {
    return this.id;   // will show no error because protected is allowed here
    // this.balance   // error because private is not allowed here
  }
}
```

## Conclusion

`private` hides internal data, `protected` shares it with child classes, `public` is open to all, and `readonly` locks a value after setup. These checks happen at compile time only, so they guide writing code rather than act as real security.