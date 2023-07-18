import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Main from './componentes/Main';

class App extends React.Component {

  render(){
    return (
      <div className='App'>

        <Header/>
    
        <Main />

        <Footer />
      

      </div>
        );
  }
}

export default App;
