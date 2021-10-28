# Reading-Session

This repo acts as a log of the stuff I read the past days for testing what I've actually learned

# October 5-6

- Js Scopes
- function expressions
- Higher order functions
- Hoisting

# Lesson 07/10/2021

**Introduction to React** - React Components - Component Props - Component State (intro)

## Tasos : Excercise1:

Create a class based React Component that has a state that contains an array with 4 color string values ('red', 'green', 'blue', 'yellow'). For each element of this array the component should render a child component (functional) that displays the index of the element in the array and has its background color as the value of the same array element. Post the link of the solution below :)

[Solution](https://codesandbox.io/s/hidden-darkness-i61rb?file=/src/App.js) | [forEach_version](https://codesandbox.io/s/vibrant-golick-svpid?file=/src/App.js)

Tasos: Almost perfect! Nailed it! There are only two minor comments that they for sure be useful to you eventually:

- `<Child bg={el}` This line here is a poor choice of prop and variable naming. When choosing a name, ask yourself "How will I remember it if I revisit this in a couple of years? Will a new engineer that may see this line understand the semantic purpose of these variables?". Naming is a highly important thing in software development. So you should choose something like "backgroundColor" for the first and "color" for the other one.
- This is less important but, I don't like it when I see useless commented code, even in a sandbox. More like a personal bias, but I always prefer my deliverables to have a "production-ready" status.

# October 12 React workshop second session

- setState
- branch 0 master: completed
- branch react--01: completed
- branch react--02: TODO

# October 13

- Default parameters
- Spread & Rest syntax

## Lesson 13/10/2021

- event lifting
- component lifecycle(intro)
- branch react--02: completed
- branch react--03: TODO

# October 14

- Destructuring
- Objects (syntax, methods)
- this keyword in objects

# October 16

- DOM manipulation

# October 18

- React Component Lifecycle
- React Higher Order Components
  [HOC-example](https://codesandbox.io/s/sparkling-violet-pgst7?file=/src/App.js)

- branch react--03: completed
- branch react--04: TODO

# October 21

- react hooks (useState, useEffect)
- branch react--04: completed
- branch react--05: TODO

# October 23

- react custom hooks
- branch react--05: completed
- branch react--06: TODO

# October 24

- react mini recap exercise
- branch react--06: completed
- branch react--07: completed
- branch react--08: TODO

# October 25

- branch react--08: completed
- branch react--09: TODO

# October 26

- start photo gallery mini-project with react and firebase(v 9.1.3)
- branch react--09: completed

# October 27

- Finished photo gallery mini-project with react and firebase(v 9.1.3)
