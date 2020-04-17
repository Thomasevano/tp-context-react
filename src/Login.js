import React from 'react';
import Context from './Context';

function Login() {
  return (
    <div>
      <Context>
        { isAuth}
      </Context>
    </div>
  )
}

export default Login;