//# Section 10. Advanced: Handling Side Effects, Using Reducers & Using the Context API

//# 120. Introducing React Context (Context API)
//# 121. Using the React Context API
/*
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;
*/

//# 122. Tapping Into Context with the useContext Hook
/*
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;
*/

//# 123. Making Context Dynamic
/*
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;
*/

//# 124. Building & Using a Custom Context Provider Component
/*
import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('IsLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(1);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('IsLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value = {{isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler}}>
      {props.children}
    </AuthContext.Provider>
  )
   
}

export default AuthContext;
*/

//# 125. React Context Limitations
//# 126. Learning the "Rules of Hooks"
//# 127. Refactoring an Input Component
/*
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('IsLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(1);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('IsLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContext;
*/

//# 128. Diving into "Forward Refs"
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('IsLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(1);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('IsLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContext;