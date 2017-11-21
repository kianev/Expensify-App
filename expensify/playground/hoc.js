import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAdmin && <p>This is private info, please dont share!</p>}
        <WrappedComponent {...props}/>
      </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
      <div>
        {props.isAuthentificated ? (
          <WrappedComponent {...props}/>
        ) : (
          <p>Please login to view the info!</p>
        )}

      </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

export default AuthInfo;