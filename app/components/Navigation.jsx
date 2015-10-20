import React from 'react';
import {Link, RouteHandler} from 'react-router';
import styles from 'scss/components/_navigation';

export default class Navigation extends React.Component {
  render() {
  	let navbarStyle = {	
  		backgroundColor: '#2b2b2b',
  		color:'#cdcdcd',
  		borderWidth:'0'
  	};

  	let brandStyle = {
  		color: '#f44d3c'
  	};
    return (
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
                <h6 className="text-center">COMPLETE THESE FIELDS TO SIGN UP</h6>
                <form className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-lg btn-block">Sign In</button>
                        <span className="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
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
