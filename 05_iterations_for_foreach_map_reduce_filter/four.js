const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
/*
js
rb
py
java
cpp
*/


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    //console.log(key);
}
/*
Nothing prints 

The reason the loop does not execute is because the for-in loop in 
JavaScript only iterates over the own properties of an object, 
not its inherited properties. In this case, the map inherits properties 
from Object.prototype, which includes a property called "length" that is 
an array-like object with a length of 0. Since the map does not have any 
own properties, the for-in loop will never execute.

To iterate over the keys of a Map object, you can use the map.keys() method, which returns an iterator that you can loop over:

for (const key of map.keys()) {
  console.log(key); // 'a', 'b', 'c'
}
*/
for (const key of map.keys()) {
    console.log(key); // 'IN', 'USA', 'Fr'
  }
