//rafce
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [userName, setuserName] = useState('');
    const [show, setshow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('https://create-profile-backend.herokuapp.com/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            console.log(data);
            setuserName(data.name);
            setshow(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userHomePage();
    }, [])

    return (
        <>
            <div className="container text-center">
                <div style={{ marginTop: '15%' }}>
                    <h4 className={"text-primary"}>Welcome</h4>
                    <h1 className={"text-secondary"}>{userName}</h1>
                    <h3 className={"text-success"}>{show ? 'Happy to see you back' : "We are the MERN Developer"}</h3>
                </div>
            </div>
        </>
    )
}

export default Home
