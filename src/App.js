
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <Header title="Header Component" />
      <SideBar title="SideBar Component" />
      <Content title="Content Component" />
      <Footer title="Footer Component" />
    </div>
  );
}

export default App;
