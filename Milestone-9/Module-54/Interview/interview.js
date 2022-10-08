// ** 1. How is React routing different from conventional routing?

// ** In conventinal routing -> every time user hit any url or <a> tag the browser requests a new page from the server but in react router dom when user hit any url or <Link> they requests the page in the client side so that the page renders from the client side not from the server. In React routing, the users feel like they are navigating across distinct(sotontro) webpages while in actuality they aren’t. But, in case of conventional routing, the user actually navigates across different web pages for each individual view.

// https://discuss.boardinfinity.com/t/how-does-the-react-router-differ-from-conventional-routing/5160

// ** 2. How to implement react routing?

// ** Steps 1. set a router -> const router = createBrowserRouter([here the path and the element + loader + action + errorElement + children props wil be declared])
// ? Steps 2. Set a <RouterProvider router={router}> pass the router and set this component in the App.js or in the index.js file 
// ! Steps 3. Set a layout -> for common part use component itselft and for the changing part use <Outlet/> placeholder component 

// ** 3. What is the purpose of context API in react?

// ? To prevent the props drilling and to avaiable the data or props in the components from its umbralla (parent) componet to the child of the umbralla components


// ** 4. Can you explain how the provider works with the React context Api?

// ** Every Context object (createContext -> provides an object which has a property named Provider , Which is basically a component) comes with a Provider React component that allows consuming components(Child under the context provider components called as consumer component) to subscribe to context changes (If any data change the under component will access that data from the context). 

// ** 5. what is custom hook in react??

// ? Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.

// ** https://dev.to/olenadrugalya/introduction-to-custom-hooks-2nmk

// ** 6. How many ways we can implement conditinal rendering in React? Explain the ways?

// ? 4 Ways of conditional rendering in react js

// ? 1. If-else with a veriable defined -> we will render data according to the data change in the variable , Example -> true , false data
// ? 2. Ternarry operator -> true ? 'render any component or css class' : 'false hole onno kisu render korbo'
// ? 3. && operator -> something && render an element or component or anything -> ekta logic sotti holei amra dan diker ta render korbo
// ? 4. || operator -> something || render an element or component or anything  -> it means dan diker ta mittha hole or je component ase or element ase oi render hobe