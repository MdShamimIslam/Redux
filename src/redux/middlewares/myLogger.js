import rootReducer from "../rootReducer/rootReducer";



export const myLogger = (store) => (next) => (action) => {

    console.log(`Action : ${JSON.stringify(action)}`);
    console.log(`Before state : ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Current state : ${JSON.stringify(upcomingState)}`);

    return next(action);
    
}