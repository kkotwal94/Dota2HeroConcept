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
      <div>
      <section className="container-fluid" id="section1">
    <div className="v-center">
        <h1 className="text-center">Dota Custom Heroes</h1>
        <h2 className="text-center lato animate slideInDown">Change It To Say <b>Something</b> Unique</h2>
        <p className="text-center">
            <br/>
            <a href="#" className="btn btn-danger btn-lg btn-huge lato" data-toggle="modal" data-target="#myModal">Get Free Membership</a>
        </p>
    </div>
    <a href="#section2">
    <div className="scroll-down bounceInDown animated">
            <span>
                <i className="fa fa-angle-down fa-2x"></i>
            </span>
    </div>
        </a>
</section>
      </div>
    );
  }
}
