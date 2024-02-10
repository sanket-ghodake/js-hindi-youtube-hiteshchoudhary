# Console log vs dir

`console.log` and `console.dir` are both methods provided by the `console` object in JavaScript for logging information to the console, but they serve different purposes.

## `console.log`:

- **Purpose:** Used for general-purpose logging.
- **Output Format:** Prints a human-readable representation of the provided values.
- **Example:**
  ```javascript
  const name = "John";
  const age = 30;
  console.log("Name:", name, "Age:", age);
  ```
  Output:
  ```
  Name: John Age: 30
  ```
- **Usage:** Suitable for logging simple values, strings, numbers, and objects.

## `console.dir`:

- **Purpose:** Used for displaying a detailed representation of JavaScript objects.
- **Output Format:** Displays an interactive list of the properties of the JavaScript object.
- **Example:**
  ```javascript
  const person = { name: "Jane", age: 25, address: { city: "New York", zip: 10001 } };
  console.dir(person);
  ```
  Output:
  ```
  Object
    address: Object
      city: "New York"
      zip: 10001
    age: 25
    name: "Jane"
  ```
- **Usage:** Useful when you want to explore the structure of an object, especially for complex objects with nested properties.

## Choosing Between `console.log` and `console.dir`:

- Use `console.log` for general logging of values, simple messages, or debugging information.
- Use `console.dir` when you want to inspect the structure of JavaScript objects in a more detailed and interactive way.

It's worth noting that the behavior of these methods can vary among different browsers and environments, and some environments may not support `console.dir` in the same way. Also, modern browsers often provide more advanced developer tools that allow you to explore objects interactively without relying heavily on `console.dir`.

