import React from 'react';
import {Link} from 'react-router';
import UserStore from 'stores/UserStore';

import styles from 'scss/components/_login';

export default class Signup extends React.Component {
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
  return (
	<div>
	<div className={styles['wrapper2']}>
	<div className={styles['container']}>
		<h1>Welcome</h1>
		<form className={styles['signupForm']} action = "/signup" method = "post">
			<input type="text" className = {styles['form-control']} placeholder="Username" name = "email"/>
			<input type="password" className = {styles['form-control']} placeholder="Password" name = "password"/>
      <input type="text" className = {styles['form-control']} placeholder="First Name" name = "firstName"/>
      <input type="text" className = {styles['form-control']} placeholder="Last Name" name = "lastName"/>
      <input type="text" className = {styles['form-control']} placeholder="Section #" name = "section"/>
			<button type="submit" className={styles['login-button']}>Signup</button>
		</form>
		<hr/>
<p>Already have an account? <Link to="/login">Log in</Link></p>
	</div>
</div>
</div>
			);
	}
}