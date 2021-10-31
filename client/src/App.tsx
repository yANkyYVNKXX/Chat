import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/Store';
import MyApp from './MyApp';

function App() {

 
  return (
    <BrowserRouter>
    <Provider store={store}>
      <MyApp/>
    </Provider>
    </BrowserRouter>
  );
}




export default App;