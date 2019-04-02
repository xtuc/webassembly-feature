# webassembly-feature

> Test if a WebAssembly feature is supported

## Install

Using npm:

```sh
npm install --save webassembly-feature
```

or using yarn:

```sh
yarn add webassembly-feature
```

## Usage

API:

```js
const supports = require("webassembly-feature");

console.log(supports["JS-BigInt-integration"]()); // false
console.log(supports["multi-value"]());           // false
console.log(supports["mutable-global"]());        // true
console.log(supports["simd"]());                  // false
```

Demo: https://sauleau.com/notes/test-if-a-WebAssembly-feature-is-supported.html.
