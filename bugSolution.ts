function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate through the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Modify the function to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));

//Solution 3: Use a generic function
function greeterGeneric<T>(person: T): string {
  return "Hello, " + person;
}
console.log(greeterGeneric(user)); // This will work but may not be the intended behavior.