import React from 'react';
import useAuth from '../../../Context/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h3>Please login</h3>
            <button onClick={signInUsingGoogle} className="btn-warning px-3 py-1 rounded-2 mb-3 border-0">Google Sign In</button>
        </div>
    );
};

export default Login;