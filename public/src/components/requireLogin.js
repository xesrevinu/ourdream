/**
 * Created by xiaokekeT on 15/8/12.
 */
import React, {Component} from 'react';

class RequireLogin extends Component {
	static onEnter(store) {
		return (nextState, transition) => {
			const { auth } = store.getState()
			const { user } = auth
			if (!auth.isLoggedIn && !user) {
				// oops, not logged in, so can't be here!
				return transition.to('/login');
			}
		}
	}
}
class Logged extends Component {
	static onEnter(store) {
		return (nextState, transition) => {
			const { auth } = store.getState()
			const { user } = auth
			if (auth.isLoggedIn && user) {
				return transition.to('/app');
			}
		}
	}
}
export default { RequireLogin, Logged }