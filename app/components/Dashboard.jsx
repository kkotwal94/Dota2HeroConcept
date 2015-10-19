import React from 'react';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import {Link} from 'react-router';

export default class Dashboard extends React.Component {
	constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }

  render() {
  	console.log(this.state.user);
    return (
      <div>Welcome to the Dashboard</div>
    );
  }
}
