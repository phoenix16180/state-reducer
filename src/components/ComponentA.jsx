import ComponentB from './ComponentB';
import { INITIAL_STATE, loginReducer } from '../loginReducer';
import { createContext, useReducer } from 'react'

export const LoginContext = createContext();

function ComponentA() {
    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

    return (
        <fieldset>
            <h1>ComponentA</h1>
            <h5>Login Status: {state.loggedIn ? 'Logged In' : 'Logged Out'}</h5>
            <button onClick={() => dispatch({ type: 'login' })} >Sign In</button>
            <button onClick={() => dispatch({ type: 'logout' })} >Sign Out</button>
            <LoginContext.Provider value={{ state, dispatch }}>
                <ComponentB />
            </LoginContext.Provider>
        </fieldset>
    )
}

export default ComponentA
