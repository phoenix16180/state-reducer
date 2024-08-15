// loginReducer.jsx // (reducer file)
// export const INITIAL_STATE  = {
//     loginStatus: false,
// }

// export const loginReducer = (state, action) => {
//     switch (action.type) {
//         case 'login': {
//             return { ...state, loggedIn: true }
//         }
//         case 'logout': {
//             return { ...state, loggedIn: false }
//         }
//         default: {
//             throw new Error('not an action')
//         }
//     }
// }

// Parent Component: ComponentA
// import { INITIAL_STATE, loginReducer } from '../loginReducer';
// import { createContext, useReducer } from 'react'
// export const LoginContext = createContext();
// function ComponentA() {
//     const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
//     return (
//         <fieldset>
//             <h1>ComponentA</h1>
//             <h5>Login Status: {state.loggedIn ? 'Logged In' : 'Logged Out'}</h5>
//             <button onClick={() => dispatch({ type: 'login' })} >Sign In</button>
//             <button onClick={() => dispatch({ type: 'logout' })} >Sign Out</button>
//             <LoginContext.Provider value={{ state, dispatch }}>
//                 <ComponentB />
//             </LoginContext.Provider>
//         </fieldset>
//     )
// }


// Child Component: ComponentD
// import { LoginContext } from './ComponentA';
// import { useContext } from 'react'
// function ComponentD() {
//     const { state, dispatch } = useContext(LoginContext)
//     return (
//         <fieldset>
//             <h1>ComponentD</h1>
//             <h5>Login Status: {state.loggedIn ? 'Logged In' : 'Logged Out'}</h5>
//             <button onClick={() => dispatch({ type: 'login' })} >Sign In</button>
//             <button onClick={() => dispatch({ type: 'logout' })} >Sign Out</button>
//         </fieldset>
//     )
// }
// export default ComponentD
