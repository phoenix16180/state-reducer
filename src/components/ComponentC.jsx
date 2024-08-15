import ComponentD from './ComponentD';
import { LoginContext } from './ComponentA';
import { useContext } from 'react';

const ComponentC = () => {
    const { state, dispatch } = useContext(LoginContext);

    return (
        <fieldset>
            <h1>ComponentC</h1>
            <h5>Login Status: {state.loggedIn ? 'Logged In' : 'Logged Out'}</h5>
            <button onClick={() => dispatch({ type: 'login' })} >Sign In</button>
            <button onClick={() => dispatch({ type: 'logout' })} >Sign Out</button>
            <ComponentD/>
        </fieldset>
    );
};

export default ComponentC;
