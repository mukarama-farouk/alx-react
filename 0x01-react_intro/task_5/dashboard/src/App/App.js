import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <Login />
        <Notifications />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
