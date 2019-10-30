import React from 'react';
import Navbar from './components/layout/Navbar'
import Signin from './pages/auth/Signin'

class App extends React.Component {
    render() {
      return (
          <Signin/>
      );
    }
}

export default App;
