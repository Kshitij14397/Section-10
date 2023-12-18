//# Section 10. Advanced: Handling Side Effects, Using Reducers & Using the Context API

//# 108. Module Introduction
//# 109. What are "Side Effects" & Introducing useEffect
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 110. Using the useEffect() Hook
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 111. useEffect & Dependencies
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 112. What to add & Not to add as Dependencies
//# 113. Using the useEffect Cleanup Function
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 114. useEffect Summary
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 115. Introducing useReducer & Reducers In General
//# 116. Using the useReducer() Hook
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 117. useReducer & useEffect
//# 118. Adding Nested Properties As Dependencies To useEffect
//# 119. useReducer vs useState for State Management
/*
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 120. Introducing React Context (Context API)
//# 121. Using the React Context API
/*
import React from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
   {(ctx) => {
        return (<nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>)
   }}
    </AuthContext.Consumer>
      );
};

export default Navigation;
*/

//# 122. Tapping Into Context with the useContext Hook
/*
import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {

  const ctx = useContext(AuthContext)
  return (
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;
*/

//# 123. Making Context Dynamic
/*
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 124. Building & Using a Custom Context Provider Component
/*
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 125. React Context Limitations
//# 126. Learning the "Rules of Hooks"
//# 127. Refactoring an Input Component
/*
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
*/

//# 128. Diving into "Forward Refs"
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
