# Fixing a Bug in the `sum` Function

You've defined a function named `sum` that subtracts `b` from `a` instead of adding them.

## ✅ Corrected Function

```javascript
function sum(a, b) {
  return a + b;
}
```

## 🧠 Explanation of the Original Code's Behavior

The original code:

```javascript
function sum(a, b) {
  return a - b;
}
```

takes two arguments, `a` and `b`, and returns the result of `a - b` (a minus b), which is subtraction — not addition as the function name suggests.

## 🚀 How to Use the Corrected Code

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(5, 3); // result will be 8 (5 + 3)
console.log(result);
```

## 💡 Key Takeaway

It's important to double-check your code, especially when dealing with basic mathematical operations like addition and subtraction, to ensure it behaves as intended. A small typo can lead to unexpected results.
