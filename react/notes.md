**componentDidMount**: invoked when a component has been inserted into the DOM
**componentWillUnmount**: invoked just before the component is removed from the DOM
**getDerivedStateFromProps**: invoked every time a component is rendered. It can be used to change state when certain props change. This is a static method in a component class that returns the changed state, or null if there are no changes to the state.
**getSnapshotBeforeUpdate**: called just before the DOM is updated. The value that is returned from getSnapshotBeforeUpdate is passed on to componentDidUpdate
**shouldComponentUpdate**: invoked just before rendering and returns a boolean value that determines whether rendering should happen


## State in function Components:
`React.useState` is a react function that allows us to create state and accepts a default value as a parameter `React.useState(0)`

The useState function returns an array containing two elements:
  1. The first array element contains the current value of state
  2. The second array element contains a function to set state to a different value


## Fn component lifecycle hooks:
**useEffect fn**: a function that allows us to hook into a component lifecycle
  - takes two arguments:
    1. a arrow fn that is called when first rendered.
    2. a array of values which determines when the arrow function is called. The values in the array trigger the fn when changed and when passed an empty array it only triggers the fn on initial render, omitting the array triggers the fn on every render.
  
  - the arrow function can return a fn that will be called when the component unmounts.

  ```js
  React.useEffect(() => {
    console.log("open prop changed!");
    return () => console.log('component unmounted!');
  }, [props.open]);
  ```

## Optimizing component re-rendering:

**memo fn**: a function that stops component re-rendering except when props change
- should only be used on components the re-render too often as there is a preformance cost associated with the fn
  ```js
  const ComponentMemo = React.memo(ComponentName);
  export default ComponentMemo;
  ```


## Set optional props and default values:
  ```js
  interface iProps = {
    name?: string,
  }

  const Component: React.SFC<iProps> (props) => {
    return (<div>{props.name}</div>);
  }

  Component.defaultProps = {
    name: 'default name',
  };
  ```


## Questions
1. During development, what are the TSLint settings for allowing debugger statements and logging to the console?

2. In JSX, how can we display a button with a label from a prop called buttonLabel in a class component?

3. How can we make the buttonLabel prop optional, and default to Do It?

4. In JSX, how can we display this button only if the doItVisible state is true? (Assume we already have a state type declared containing doItVisible, and it has already been initialized in the constructor.)

5. How would we create a click handler for this button?

6. We have a state type declared containing doItDisabled. It has also been initialized in the constructor. How would we set this state to disable the Do it button after we click it?

7. If the button is clicked when it is in a disabled state, is the click handler still executed?

8. What life cycle method would we use in a class component to add event handlers to a non-React web component living in our React component?

9. Which life cycle method would we use to remove this event handler?

10. We have a function component called Counter. It needs to contain a piece of state called count, and a function to update it called setCount. How can we define this state and default the initial count to 10?

11. In the preceding Counter component, we have a decrement function that needs to reduce count by 1. 


## Answers:
1. ```json
  {
    "rules": {
      "no-debugger": false,
      "no-console": false,
    }
  }
  ```

2. ```js
  interface iProps = {
    buttonLabel: string,
  }
  const button: React.SFC<iProps> = (props) {
    return (
      <button>{props.buttonLabel}</button>
    );
  }
  ```

3. 
Class Component: 
```js
public static defaultProps = {
  buttonLabel: "Do it"
};
```

Function Component:
```js
  interface iProps = {
    buttonLabel?: string,
  }

  const Component: React.SFC<iProps> (props) => {
    return (
      <button>{props.buttonLabel}</button>
    );
  }

  Component.defaultProps = {
    buttonLabel: 'Do it',
  };
  ```

4. ```js
  { this.state.doItVisible && <button>{props.buttonLabel}</button> }
  ```

5. ```js
  <button onClick={clickHandler}>{props.buttonLabel}</button>
  ```

6. ```js
  render () {
    return <button disabled={this.state.doItDisabled} onClick={this.clickHandler}>{this.props.buttonLabel}</button>;
  }

  private clickHandler = () => {
    this.setState({ doItDisabled: true });
  }

  ```
7. no

8. componentDidMount

9. componentWillUnmount

10. We have a function component called Counter. It needs to contain a piece of state called count, and a function to update it called setCount. How can we define this state and default the initial count to 10?
```js
interface iProps = {};

const Counter: React.SFC<iProps> = (props) => {
  const [count, setCount] = React.useState(10);

  return (
    <div>{count}</div>
  );
}
```

11. 
```js
interface iProps = {};

const Counter: React.SFC<iProps> = (props) => {
  const [count, setCount] = React.useState(10);

  decrement function () {
    setCount(count - 1);
  }

  return (
    <div>{count}</div>
  );
}
```