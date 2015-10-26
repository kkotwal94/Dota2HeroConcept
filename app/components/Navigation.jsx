import React from 'react';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import {Link, RouteHandler} from 'react-router';
import styles from 'scss/components/_navigation';

export default class Navigation extends React.Component {
  

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
  	let navbarStyle = {	
  		backgroundColor: '#2b2b2b',
  		color:'#cdcdcd',
  		borderWidth:'0'
  	};

  	let brandStyle = {
  		color: '#f44d3c'
  	};
    let renderedResult;
    let firstName = this.state.user.get('profile').get('firstName');
    let lastName = this.state.user.get('profile').get('lastName');

    if (firstName == undefined) {
        firstName = 'default';
    }

    if (lastName == undefined) {
        lastName = 'default';
    }
    if (this.state.user.get('authenticated')) {
        renderedResult = (
            <div>
            <nav className="navbar navbar-trans navbar-fixed-top" role="navigation" style={navbarStyle} >
        <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className={styles['navbar-icon']} href="#" style = {brandStyle}></a>
        </div>
        <div className="navbar-collapse collapse" id="navbar-collapsible">
            <ul className="nav navbar-nav navbar-left">
                <li><a href="#section1" className={styles['tabHover']}>Gallery</a></li>
                <li><a href="#section2" className={styles['tabHover']}>Create Hero Concept</a></li>
                <li><a href="#section3" className={styles['tabHover']}>Search Hero Concept</a></li>
                <li><a href="#section4" className={styles['tabHover']}>View Users</a></li>
                <li><a href="#section5" className={styles['tabHover']}>About</a></li>
                <li><a href="#section6" className={styles['tabHover']}>Github</a></li>
                <li>&nbsp;</li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href ="" className={styles['tabHover']}>{firstName + " " + lastName}</a></li>
                <li><a href="/logout" className={styles['tabHover']}><i className="fa fa-sign-in"></i>Logout</a></li>
            </ul>
        </div>
    </div>
</nav>

<div id="myModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 className="text-center"><img src="//placehold.it/110" className="img-circle"/><br/>Login</h2>
            </div>
            <div className="modal-body row">
                <h3>Logged In, Go make some heroes!</h3>
            </div>
            <div className="modal-footer">
                <h6 className="text-center"><a href="">Privacy is important to us. Click here to read why.</a></h6>
            </div>
        </div>
    </div>
</div>
</div>

            );

    }

    else {
        if (this.state.user.get('isWaiting')) {
            renderedResult = (
                <div>
                <nav className="navbar navbar-trans navbar-fixed-top" role="navigation" style={navbarStyle} >
        <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className={styles['navbar-icon']} href="#" style = {brandStyle}></a>
        </div>
        <div className="navbar-collapse collapse" id="navbar-collapsible">
            <ul className="nav navbar-nav navbar-left">
                <li><a href="#section1" className={styles['tabHover']}>Gallery</a></li>
                <li><a href="#section2" className={styles['tabHover']}>Create Hero Concept</a></li>
                <li><a href="#section3" className={styles['tabHover']}>Search Hero Concept</a></li>
                <li><a href="#section4" className={styles['tabHover']}>View Users</a></li>
                <li><a href="#section5" className={styles['tabHover']}>About</a></li>
                <li><a href="#section6" className={styles['tabHover']}>Github</a></li>
                <li>&nbsp;</li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href ="/">Currently trying to login, try again?</a></li>
                <li><a href="#" data-toggle="modal" data-target="#myModal" className={styles['tabHover']}><i className="fa fa-sign-in"></i>Sign up</a></li>
            </ul>
        </div>
    </div>
</nav>

<div id="myModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 className="text-center"><img src="//placehold.it/110" className="img-circle"/><br/>Login</h2>
            </div>
            <div className="modal-body row">
               <h3>Logging In....If its taking to long <a>try again</a></h3>
            </div>
            <div className="modal-footer">
                <h6 className="text-center"><a href="">Privacy is important to us. Click here to read why.</a></h6>
            </div>
        </div>
    </div>
</div>
</div>
                );
        }
        else {
            renderedResult = (
                <div>
                <nav className="navbar navbar-trans navbar-fixed-top" role="navigation" style={navbarStyle} >
        <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className={styles['navbar-icon']} href="#" style = {brandStyle}></a>
        </div>
        <div className="navbar-collapse collapse" id="navbar-collapsible">
            <ul className="nav navbar-nav navbar-left">
                <li><a href="#section1" className={styles['tabHover']}>Gallery</a></li>
                <li><a href="#section2" className={styles['tabHover']}>Create Hero Concept</a></li>
                <li><a href="#section3" className={styles['tabHover']}>Search Hero Concept</a></li>
                <li><a href="#section4" className={styles['tabHover']}>View Users</a></li>
                <li><a href="#section5" className={styles['tabHover']}>About</a></li>
                <li><a href="#section6" className={styles['tabHover']}>Github</a></li>
                <li>&nbsp;</li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" data-toggle="modal" data-target="#myModal" className={styles['tabHover']}><i className="fa fa-sign-in"></i>Login</a></li>
                <li><a href="#" data-toggle="modal" data-target="#myModal2" className={styles['tabHover']}><i className="fa fa-sign-in"></i>Sign up</a></li>
            </ul>
        </div>
    </div>
</nav>

<div id="myModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 className="text-center"><img src="//placehold.it/110" className="img-circle"/><br/>Login</h2>
            </div>
            <div className="modal-body row">
                <h6 className="text-center">COMPLETE THESE FIELDS TO SIGN UP</h6>
                <form className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" placeholder="Email" ref = "email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" placeholder="Password" ref = "password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-lg btn-block" onClick = {this._onLoginSubmit}>Sign In</button>
                        <span className="pull-right"><a href="#" data-target = "#myModal2">Register</a></span><span><a href="#">Need help?</a></span>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <h6 className="text-center"><a href="">Privacy is important to us. Click here to read why.</a></h6>
            </div>
        </div>
    </div>
</div>

<div id="myModal2" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h2 className="text-center"><img src="//placehold.it/110" className="img-circle"/><br/>Login</h2>
            </div>
            <div className="modal-body row">
                <h6 className="text-center">COMPLETE THESE FIELDS TO SIGN UP</h6>
                <form className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0" action = "/signup" method = "post">
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" placeholder="Email" ref = "emails" name ="email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" placeholder="Password" ref = "passwords" name = "password"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" placeholder="First Name" ref = "firstNames" name = "firstName"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" placeholder="Last Name" ref = "lastNames" name = "lastName"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-lg btn-block">Sign Up</button>
                        <span className="pull-right"><a href="#" data-target = "#myModal">Log In</a></span><span><a href="#">Need help?</a></span>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <h6 className="text-center"><a href="">Privacy is important to us. Click here to read why.</a></h6>
            </div>
        </div>
    </div>
</div>
</div>

                );
        }
    }
    return (
      <div>
     
      {renderedResult}

      </div>
    );
  }
}
