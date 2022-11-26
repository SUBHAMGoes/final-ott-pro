import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Subscribe from './screens/Subscribe';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    }); 
    
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
        <Router>
          {!user ? (
            <LoginScreen />
              ) : (
          <Routes>

            <Route path='/profile' element={<ProfileScreen />}>
            </Route>

            <Route path="/" element={<HomeScreen />}>
          </Route>

          <Route path='/subscribe' element={<Subscribe />}>
            </Route>

        </Routes>
              )}
    </Router>
    </div>

    
);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

