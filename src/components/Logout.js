import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);
    {/* <h1>logout ka page</h1> */ }
    {/* this time we use promise rather than async await */ }
    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false });
            history.push('/login', { replace: true });
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error);
        })
    });

    return (
        <>

        </>
    )
}

export default Logout
