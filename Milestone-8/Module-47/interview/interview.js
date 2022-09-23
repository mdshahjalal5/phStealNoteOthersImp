// ** 1. What is React?

// ? React is a Js library , focused on only user interface. Library meets the specific tasks and react birefly done that specific work for the developer. In case of more scalable app you can use so many third party packages with react js to accomplish your task or the job.


// ** 2. What is the difference between virtual dom and real dom?

// ? Virtual DOM is a similar DOM type object in the react but there are few differences, The most significant difference of between the real DOM and virtual dom is that the real dom has to go through the whole painting process every time any element changes in the html file. Where as virtual dom only changes the element and the child element underneath it if any ui changes happend. In virtual DOM there is an unique identifier for every node of the html. What virtual dom does it creates 2 separate DOM like object behind the scene and compares the before and after ui changes identifyes the change using unique identifier and finally manipulate the DOM where it needs.


// ** 3. What is JSX?

// ** JSX stads for javaScript syntactic suger. which is syntax extension to JavaScript. JSX helps us to write code and expression puerly in js but like the HTML we did but which is actually JS. So that JSX enables so many oppotunities for us write powerful js expression very easily.
// ** What jsx does it goes through the babel transpiler and there React.createElement() -> creates react element for us every time we write an element built in or self made than it compares the virtual dom's before and after and renders in the ui finally.

// ** 4. What is the difference between state and props?

// ** State -> Any data or the ui change like background color related to the state.
// ** props -> props are nothing but used to pass variables or object or the element to the child element, props used to send data to the child element and in react its unidirectional

// ** 5. What is the difference between class component and functional component?

// ** A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
// ** A class component requires you to extend from React. Component and create a render function which returns a React element.


// ** 7. What are react lifecycle methods?
// ** 3 methods -> 1.Mounting 2.Updating 3.Unmounting

// ** 8. What are hooks? Tell us the role of useEffect and useState.
// ** Hooks in react help the developer to make state change in the ui, also help to sending props and helps with the sideEffect such as fetching data in the ui and so many features without the help of the class components. 

// ** useState() -> returns an array with the [state,setState()] -> state preserves the state value while the setState did the update here also its the async function which then update the ui and lastly set the new value to the state.

// ** useEffect(,[dependencies array]) -> To manage the sideEffects we use the useEffect, such as fetch,setInterval,setTimeout,direct dom manipulations which are not the part of the react

// ** Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.

// ** 9. What is diff algorithm?

// ? diff or reconcilation algorithm compares the before change virtual dom and after change virtual dom efficiently and than give decision where to update.

//** */ The attributes have a data type of string. So no matter the value of the attribute, it will always return a string. 
// ** Property: In contrast to the attributes, which are defined in HTML, properties belong to the DOM. Since DOM is an object in JavaScript, we can get and set properties.

