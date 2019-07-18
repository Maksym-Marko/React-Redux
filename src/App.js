import React, { Component } from 'react';
import Posts from './components/Posts';

import { Provider } from 'react-redux';
// import store from './redux/store';
import store from './store';


class App extends Component {

	render() {

		return(
			<Provider store={store}>
				<div>
					<h1>All posts!</h1>
				</div>
				<Posts />
			</Provider>
		)

	}

}

export default App;
