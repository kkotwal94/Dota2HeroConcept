import React from 'react';



export default class Logout extends React.Component {
  render() {
    return (
      <div className={styles.logout}>
        <h1 className={styles.logout__header}>Hey m8, you have been logged out</h1>
      </div>
    );
  }
}
