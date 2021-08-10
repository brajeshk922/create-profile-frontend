import React, { useState, useContext } from 'react'
import { makeStyles } from "@material-ui/core";
import login from '../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const useStyle = makeStyles({
    container: {
        color: 'red',
        fontSize: 20,
        display: 'flex',
        justifyContent: 'space-around'
    }
})

const Login = () => {
    const classes = useStyle();
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('https://create-profile-backend.herokuapp.com/signin', {
            method: 'POST',
            mode:"cors",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert('invalid credentials');
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("login successful");
            history.push('/');
        }

    }
    return (
        <>
            <div className={'container'}>
                <div className={'bg-white d-flex flex-direction-row justify-content-evenly m-5'}>
                    <div className={'w-25 bg-light m-5 text-center'}>
                        <img src={login} alt='image' height='350px' width='300px' />
                        <NavLink to='/signup'>Create an Account</NavLink>
                    </div>
                    <div className={'w-50  m-5 left'}>
                        <h2>Sign in</h2>
                        <form method='POST'>
                            <input type='email' name='email' id='email' placeholder='your email' class="form-control mb-3 bg-light" autoComplete='off' value={email} onChange={(e) => setemail(e.target.value)} />
                            <input type='password' name='password' id='password' placeholder='your password' class="form-control mb-3 bg-light" autoComplete='off' value={password} onChange={(e) => setpassword(e.target.value)} />
                            <input type='submit' onClick={loginUser} name='signin' id='signin' value="Log In" style={{ backgroundColor: 'lightBlue', width: 100, hight: 50, borderRadius: 10, marginTop: 10 }} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
