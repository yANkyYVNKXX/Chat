import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter} from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './Redux/Store';
import { getAuthReducer } from './Selectors';
import { authThunk } from './Redux/authReducer';

function MyApp() {

  const dispatch = useDispatch()
        useEffect(()=>{    
            dispatch(authThunk)
        },[])

  const auth = useSelector(getAuthReducer)
 
  return (
    <BrowserRouter>
    <Provider store={store}>
    {auth.initApp &&
    <div className="App">
      <Header/>
      <Main/>
    </div>
    }
    </Provider>
    </BrowserRouter>
  );
}




export default MyApp;