import {useState,useLayoutEffect} from 'react'
import { Router } from "react-router";
import history from './utils';

// Create a history object


// Custom RouterProvider component to work with the base Router
function CustomRouter({  children }) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  
  
    useLayoutEffect(() => {
    const unlisten = history.listen(setState);
    return unlisten;
  }, []);
  
  return (
    <Router
      navigator={history}
      navigationType={state.action}
      location={state.location}
    >
      {children}
    </Router>
  );
}


export default CustomRouter
// Component