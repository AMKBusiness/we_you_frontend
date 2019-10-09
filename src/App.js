import React from 'react';
import Navbar from './components/layout/Navbar'
import Signin from './components/auth/Signin'

class App extends React.Component {
    render() {
      return (
          <Signin/>
      );
    }
}

export default App;
