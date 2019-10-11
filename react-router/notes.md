
## Routes
**BrowserRouter**: top level route wrapper that looks for Route components nested inside it
**Route**: component that determines page paths
  - use exact prop to make path render only with an exact match (not a partial match (/products vs /products/id))  
```js
const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Redirect exact={true} from="/" to="/products"/>
        <Route exact={true} path="/products" component={ProductsPage}/>
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/admin" component={AdminPage}/>
      </div>
    </Router>
  );
}
```
## Switch
The Switch component from react-router-dom renders only the first matching Route component. This solves the problem of not found pages amongst others.

## Redirect
A react-router-dom component that allows redirects


## Links
**Link**: a react-router-dom element that allows user to add a to path, and label.
**NavLink**: a react-router-dom element that allows user to add a to path, label, and adds activeClassName when on the path

## withRouter
Higher order component from readt-router-dom that give access to history, match, and location params to the wrapped component
```js
export default withRouter(Header);
```

## Implementing Nested Routes
- create the necessary links using NavLink or Link components
- route those links to the component to render the content using a Route component.

## How can you deal with animating page routes?
- the issue is when using props.location.key as the key for TransitionGroup the group is outside the Router and does not have access to history location, or match. 
- to fix this create a wrapper that wraps the routes in <Router><Route component={Routes} /></Router> and export that

## lazy load
make sure tsconfig has "compilerOptions": { "lib": ["es6", "dom"] } enabled
`const Page = React.lazy(() => import('./page-path'));`


### Questions
1. how can you add a url search param from a react component to the url?

We have the following Route component that shows a list of customers:
`<Route path="/customers" component={CustomersPage} />`

2. Will the CustomersPage component render when the page is "/customers"?

3. Will the CustomersPage component render when the page is "/customers/24322"?

4. We only want the CustomersPage component to render when the path is "/customers". How can we change the attributes on Route to achieve this?

5. What would be the Route component that could handle the "/customers/24322" path be? It should put "24322" in a route parameter called customerId.

6. How can we catch paths that don't exist so that we can inform the user?

7. How would we implement a search query parameter in CustomersPage? So, "/customers/?search=Cool Company"would show customers with the name"Cool Company".

8. After a while, we decide to change the "customer" paths to "clients". How can we implement this so that users can still use the existing "customer" paths but have the paths automatically redirect to the new "client" paths?






## Answers

1. 
```js
const addSearchParam = (searchTerm) {
  this.props.history.push(`/?search=${searchTerm}`)
}
```

2. yes
3. yes
4. `<Route exact={true} path="/customers" component={CustomersPage} />`
5. `<Route exact={true} path="/customers/:customerId" component={CustomersPage} />`
6. wrap routes in a Switch component and add it last `<Switch><Route component={NotFound} /></Switch>`
7. 
```js
import {RouteComponentProps} from 'react-router-dom';
class Demo extends React.Component<RouteComponentProps, IState> {
  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get('search') || '';
    const products = await // get products
    this.setState({ products });
  }
}
```
8. `<Redirect from="/customers" to="clients" />`