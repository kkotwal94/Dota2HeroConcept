import React from 'react';
import {Link} from 'react-router';
let injectTapEventPlugin = require("react-tap-event-plugin");
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let FlatButton = mui.FlatButton;
let AppBar = mui.AppBar;
let { MenuItem, LeftNav, Styles, Dialog, Toggle } = require('material-ui');
let Router = require('react-router');
injectTapEventPlugin();

let menuItems = [
   { route: 'Projects', text: 'Projects' },
      { route: 'About', text: 'About Me' },
      { route: 'Resume', text: 'Resume' },
      { type: MenuItem.Types.SUBHEADER, text: 'Social Media' },
      { type: MenuItem.Types.LINK, payload: 'https://github.com/kkotwal94', text: 'GitHub' },
      { type: MenuItem.Types.LINK, payload: 'https://www.linkedin.com/pub/karan-kotwal/96/404/602', text: 'LinkedIn' }
  ];

  let iconMenuItems = [
      { payload: '1', text: 'Resume', route: 'Resume'},
      { payload: '2', text: 'Contact Info' }
    ];

 let {
  DropDownIcon,
  DropDownMenu,
  FontIcon,
  RaisedButton,
  IconButton,
  List,
  ListDivider,
  ListItem,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} = mui;

export default class Navigation extends React.Component {
constructor(props, context) {
  super(props, context);
  this._handleCustomDialogCancel = this._handleCustomDialogCancel.bind(this);
  this._handleToggleChange = this._handleToggleChange.bind(this);
    this._handleCustomDialogTouchTap = this._handleCustomDialogTouchTap.bind(this);
    this._showLeftNavClick = this._showLeftNavClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._getDropSelectedIndex = this._getDropSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this.state = {
      modal: false
    };

  }

  static contextTypes = {
        router: React.PropTypes.func
    }
  
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.DARK);

  }

  transition = () => {
    this.context.router.transitionTo('Projects');
  }

   transition2 = () => {
    this.context.router.transitionTo('About');
  }

   transition3 = () => {
    window.location.href = "http://github.com/kkotwal94";
  }
    
  _onLeftIconButtonTouchTap = () => {
    this.refs.leftNav.toggle();
  }

  _showLeftNavClick = () => {
    this.refs.leftNav.toggle();
  }

  _toggleDockedLeftNavClick = () => {
    this.refs.dockedLeftNav.toggle();
    this.setState({
      isDocked: !this.state.isDocked
    });
  }
   
   _handleToggleChange = (event, toggled) => {
    this.setState({modal: toggled});
  }

   _handleCustomDialogCancel = () => {
    this.refs.customDialog.dismiss();
  }

   _handleCustomDialogTouchTap = () => {
    this.refs.customDialog.show();
    console.log("Touchtap");
  }
   _getSelectedIndex = () => {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }
   
  _onLeftNavChange = (e, key, payload) => {
    if(payload.route != "Resume") {
    this.context.router.transitionTo(payload.route);
    }
  }
 
   _getDropSelectedIndex = () => {
    let currentItem;
    for(let i = iconMenuItems.length - 1; i>=0; i--){
      currentItem = iconMenuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
    }
   
  
  onDropDownChange = (event, key, payload) =>{
     if(payload.text=='Resume') {
      //window.location.href = "/resume.pdf";
     }
     if(payload.text=='Contact Info') {
      this.refs.customDialog.show();
     }
  }

 



  render() {

    let customActions = [
      <FlatButton
        key={1}
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleCustomDialogCancel} />
    ];

     let filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
    ];
    let iconMenuItems = [
      { payload: '1', text: 'Resume' },
      { payload: '2', text: 'Contact Info' }
    ];
    let menuItems = [
    { route: 'Projects', text: 'Projects' },
      { route: 'About', text: 'About Me' },
      { route: 'Resume', text: 'Resume' },
      { type: MenuItem.Types.SUBHEADER, text: 'Social Media' },
      { type: MenuItem.Types.LINK, payload: 'https://github.com/kkotwal94', text: 'GitHub' },
      { type: MenuItem.Types.LINK, payload: 'https://www.linkedin.com/pub/karan-kotwal/96/404/602', text: 'LinkedIn' }
    ];

    let githubButton = (
     <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/kkotwal94/"
        linkButton={true}
        style={{marginTop: '5px'}}
        tooltip="GitHub"/>
    );

    let menuButton = (
     <IconButton
        iconClassName="material-icons"
        href="https://github.com/kkotwal94/"
        style={{marginTop: '5px'}}
        onClick ={this._showLeftNavClick}
        tooltip="Menu">menu</IconButton>
    );
    return(
             <div style = {{width: '100%', marginTop: '-7px', position: 'relative'}}>
             <LeftNav ref="leftNav" docked={false} menuItems={menuItems} selectedIndex={this._getSelectedIndex()} onChange={this._onLeftNavChange} />
             
               <Toolbar style = {{backgroundColor: '#2196f3'}}>
               <ToolbarGroup key = {0} float ="left">
               {menuButton}
               </ToolbarGroup>
          <ToolbarGroup key={1} float="left">
            <ToolbarTitle text="Karan Kotwal"/>
          </ToolbarGroup>
          <ToolbarGroup key={2} float="right">
            <ToolbarTitle text="Navigate" />
            
            <DropDownIcon iconClassName="muidocs-icon-navigation-expand-more" menuItems={iconMenuItems} selectedIndex={this._getDropSelectedIndex()} onChange={this.onDropDownChange} />
            <ToolbarSeparator/>
            <RaisedButton label="Projects" primary={true} onClick ={this.transition}/>
          <RaisedButton label="About Me" primary={true} onClick ={this.transition2}/>
            {githubButton}
          </ToolbarGroup>
        </Toolbar>
        <Dialog
          onChange={this.onDropDownChange}
            ref="customDialog"
            title="Karan Kotwal's Quick Info"
            actions={customActions}
            actionFocus="approve"
            modal={this.state.modal}>
            <div>
            <List>
              <ListItem primaryText="Name: Karan Kotwal"  />
              <ListItem primaryText="Pursuing Degree in Computer Science at the University of Delaware(Class of 2016)"  />
              <ListItem primaryText="Email: kotwalkaran64@gmail.com | bNastyK@udel.edu"  />
              <ListItem primaryText="Hobbies: Playing Dota 2 with friends, drawing(badly), playing soccer(basketball, tennis..)" />
              <ListItem primaryText="Working experience: A.Duie Pyle Application Development Intern, and Rite Aid Pharmacy Technician" />
            </List>
            </div>
          </Dialog>
             
             </div>
      );
  }
}

Navigation.childContextTypes = {
  muiTheme: React.PropTypes.object
};


Navigation.propTypes = { UserStore: React.PropTypes.object };
