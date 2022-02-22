const redux = require('redux');

const couterReducer = (state = { counter: 0 }, action) => {//this is our reducer, it manages the state 
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1, }
    }
    
    if (action.type === 'DECREMENT') {
        return { counter: state.counter - 1, }
    }
    
};

const store = redux.createStore(couterReducer);// this is our state. it holds the current value that the reducer handles and keeps track of who is a scribe that is under it. this is done by sending it the message "subscribe" which lets you pass an object that should know what to do with updates

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT',  })
