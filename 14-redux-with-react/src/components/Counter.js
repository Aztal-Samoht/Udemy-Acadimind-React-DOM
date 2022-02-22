//import { Component } from 'react';
import { useSelector, useDispatch, /*connect*/ }from 'react-redux'

import { counterActions } from '../store/counterSlice'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show  = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch(counterActions.increment())
  }
  const incrementBy5Handler = () => {
    for (var i = 0; i < 5; i++) {
      dispatch( counterActions.increment()); 
    }
  }

  const increaseBy10Handler = () => {
    dispatch( counterActions.increase(10));
  }

  const decHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>inc</button>
        <button onClick={incrementBy5Handler}>increment by 5</button>
        <button onClick={increaseBy10Handler}>increase by 10</button>
        <button onClick={decHandler}>dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incHandler() { this.props.increment(); }

//   decHandler() { this.props.decrement(); }

//   toggleCounterHandler() {}

//   render() {
//     return(
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>inc</button>
//           <button onClick={this.decHandler.bind(this)}>dec</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'}),
//   }
// }


export default /*connect(mapStateToProps, mapDispatchToProps )(*/Counter/*)*/;
