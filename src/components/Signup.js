import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import signup from '../images/signup.png';
import { NavLink, useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    left:{
        '& > *':{
            marginTop:"10px"
        }
    }
})

const Signup = () => {

    const history = useHistory();
    const classes = useStyle();
    const [user, setuser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(name);
        console.log(value);
        setuser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch('https://create-profile-backend.herokuapp.com/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ name, email, phone, work, password, cpassword })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("invalid registration");
            console.log('invalid registration');
        } else {
            window.alert('registration successful');
            console.log("successful registration");

            history.push("/login");
        }
    }

    return (
        <>
            <div className={'container'}>
                <div className={'bg-white d-flex flex-direction-row justify-content-evenly m-5 box-size-cover'}>
                    <div className={'w-50  m-4 left'}>
                        <h2>Sign up</h2>
                        <form method='POST'>
                        <input type='text' name='name' id='name' placeholder='your name' autoComplete='off'
                        class="form-control mb-3 mt-4 bg-light"
                        value={user.name}
                        onChange={handleInput} /> 
                         <input type='email' name='email' id='email' placeholder='your email' autoComplete='off'
                        class="form-control mb-3 bg-light"
                        value={user.email}
                        onChange={handleInput} />
                        <input type='number' name='phone' id='phone' placeholder='your phone' autoComplete='off'
                        class="form-control mb-3 bg-light"
                        value={user.phone}
                        onChange={handleInput} />
                         <input type='text' name='work' id='work' placeholder='your profession' autoComplete='off'
                        class="form-control mb-3 bg-light"
                        value={user.work}
                        onChange={handleInput} />
                         <input type='password' name='password' id='password' placeholder='password' autoComplete='off'
                        class="form-control mb-3 bg-light"
                        value={user.password}
                        onChange={handleInput} />
                         <input type='password' name='cpassword' id='cpassword' placeholder='confim password' autoComplete='off'
                        class="form-control mb-3 bg-light"
                        value={user.cpassword}
                        onChange={handleInput} />
                        <input type='submit' onClick={PostData} name='signup' id='signup' value="Register" style={{backgroundColor:'lightBlue',width:100,hight:50,borderRadius:10,marginTop:10}}/>
                        </form>
                    </div>
                    <div className={'w-25 bg-light m-5 text-center'}>
                        <img src={signup} alt='image' height='500px' width='380px' />
                        <NavLink to='/login'>I am already registerd</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
