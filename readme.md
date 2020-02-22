# React Test [![npm install react-test](https://img.shields.io/badge/npm%20install-react--test-blue.svg)](https://www.npmjs.com/package/react-test) [![test badge](https://github.com/franciscop/react-test/workflows/tests/badge.svg)](https://github.com/franciscop/react-test/actions) [![gzip size](https://img.badgesize.io/franciscop/react-test/master/index.min.js.svg?compression=gzip)](https://github.com/franciscop/react-test/blob/master/index.min.js)

> Early package! We are [looking for **beginner Open Source contributors**](https://github.com/franciscop/react-test/blob/master/Contributing.md)! ❤️

A complete and expressive testing library for React:

```js
import $ from "react-test";

it("increments the counter when clicked", async () => {
  const counter = $(<Counter />);
  expect(counter.text()).toEqual("0");
  await counter.click();
  expect(counter.text()).toEqual("1");
});
```

The `react-test` syntax follows a similar schema to jQuery so it's very easy to write expressive tests. The best way to test declarative code is with an imperative library.

### Getting Started

You need a React project already working. That's on you, but we recommend [Create React App](https://create-react-app.dev/):

```bash
npx create-react-app my-app
cd my-app
```

Then you install `react-test`, only for development:

```bash
npm install react-test --save-dev
```

Now you can write tests, let's say you have this component:

```js
// src/Counter.js
import React, { useState } from "react";

export default function Counter () {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return <button onClick={increment}>{count}</button>;
};
```

You can write the following test to make sure it's working:

```js
// src/Counter.test.js
import React from "react";
import $ from "react-test";
import Counter from "./Counter";

describe("Counter.js", () => {
  it("is initialized to 0", () => {
    const counter = $(<Counter />);
    expect(counter.text()).toBe("0");
  });

  it("can be incremented with a click", async () => {
    const counter = $(<Counter />);
    await counter.click();
    expect(counter.text()).toBe("1");
  });

  it("can be incremented multiple times", async () => {
    const counter = $(<Counter />);
    await counter.click();
    await counter.click();
    await counter.click();
    expect(counter.text()).toBe("3");
  });
});
```

Finally run the tests with Jest:

```bash
npm run test
```



### Basics of testing

> TODO: add some intro to testing and best practices here


### FAQ

#### Is this an official Facebook/React library?

No. This follows the community convention of calling a library related to React as `react-NAME`. It is made [by these contributors](https://github.com/franciscop/react-test/graphs/contributors) without any involvement of Facebook or [React](https://reactjs.org/).

#### How can I contribute?

Thanks! Please read the [Contributing Guide](./Contributing.md) where we explain how to get started with the project. Right now there are [some beginner-friendly issues](https://github.com/franciscop/react-test/labels/good%20first%20issue) so please feel free to implement those!

I will try to help as much as possible on the PRs.


#### I have a problem, how do I fix it?

Don't sweat it, [just open an issue](https://github.com/franciscop/react-test/issues/new). React Test is in an early phase with incomplete documentation so feel free to read the code or ask directly in the issues.

This will change once the library is more stable, there's more documentation and if the community grows (maybe a chat, or reddit group, or ...).
