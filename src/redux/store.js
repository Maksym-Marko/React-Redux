import { combineReducers, createStore } from 'redux'

// reducers
const userReducer = ( state={}, action ) => {
	switch(action.type) {
		case "CHANGE_NAME": {

			state = {...state, name: action.payload};

			break;
		}
		case "CHANGE_AGE": {

			state = {...state, age: action.payload};

			break;
		}

	}

	return state;
	
};

const tweetsReducer = ( state=[], action ) => {
	return state;
};

// combine reducers
const reducers = combineReducers( {
	user: userReducer,
	tweets: tweetsReducer
} );

const store = createStore( reducers );

store.subscribe( () => {
	console.log( 'Have chaged ', store.getState() );
} );

store.dispatch( {type: "CHANGE_NAME", payload: "Will"} );
store.dispatch( {type: "CHANGE_AGE", payload: 35} );

export default store;