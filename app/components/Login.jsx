import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

import styles from 'scss/components/_login';


export default class Login extends React.Component {


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

  _onLoginSubmit = () => {
    let email = React.findDOMNode(this.refs.email).value;
    const password = React.findDOMNode(this.refs.password).value;
    UserActions.manuallogin({
      email: email,
      password: password
    });
  }

  render() {
  let renderedResult;
  if (this.state.user.get('authenticated')) {
    renderedResult = (
       <div>
  <div className={styles['wrapper']}>
  <div className={styles['container']}>
    <h1 className={styles['login__header']}>LoggedIN!</h1>
    <a href="/">Lets head to the dashboard </a>
    <hr />
    </div>
    </div>
    </div>
    );
  } else {
    if (this.state.user.get('isWaiting')) {
      renderedResult = (
       <div>
  <div className={styles['wrapper']}>
  <div className={styles['container']}>
    <h1 className={styles['login__header']}>Waiting..... Maybe you need to try again <a href="/login">here</a></h1>
    <hr />
    </div>
    </div>
    </div>
    );
    } else {
      renderedResult = (
       <div>
  <div className={styles['wrapper']}>
  <div className={styles['container']}>
    <h1 className={styles['welcomelogin']}>Welcome, If ya just signed up then go ahead and sign in</h1>
    <fieldset className = {styles['loginSet']}>
      <input type="text" className = {styles['form-control']} placeholder="Username" ref = "email" name = "email" />
      <input type="password" className = {styles['form-control']} placeholder="Password" ref = "password" name = "password" />
      <button type="submit" className={styles['login-button']} to = "dashboard" onClick={this._onLoginSubmit}>Login</button>
    </fieldset>
    <hr/>

<p>Need an account? <Link to="/register">Signup</Link></p>

  </div>
</div>
</div>
);
    }}
  return (
    <div>
  {renderedResult}
  </div>
      );
  }
}
Login.propTypes = { user: React.PropTypes.instanceOf(Immutable.Map) };