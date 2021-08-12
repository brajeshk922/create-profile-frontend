import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import profile from '../images/profile.png';

const useStyle = makeStyles({
    image: {
        width: 100,
        height: 500,
    }
})
const About = () => {

    const history = useHistory();
    const [userData, setuserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();
            console.log(data);
            setuserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    const classes = useStyle();
    return (
        <>
            <div className="container card mt-5 mx-500px p-2 ">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={profile} width="300px" height="250px" alt="image" />
                        </div>
                        <div className="col-md-6">
                            <div className='profile-head'>
                                <h5>{userData.name}</h5>
                                <h6 className={"text-primary"}>{userData.work}</h6>
                                <p className="profile-rating mt-2 mb-5">RANKING <span>1/10</span></p>
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a href="#home" class="nav-link active" data-toggle="tab">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#profile" class="nav-link" data-toggle="tab">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" className="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>

                    <div className="row">
                        {/* left side link */}
                        <div className=" col-md-4 pl-5 profile-work">
                            <p>WORK LINK</p>
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                            <a href="#" target='_bk' > youtube</a><br />
                        </div>


                        {/* right side data toggle */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content ">
                                <div className="tab-pane fade show active" id="home" >
                                    <div className='row'>
                                        <div className="col-md-4">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>profession</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>{userData.work}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade " id="profile" >
                                    <div className='row'>
                                        <div className="col-md-4">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>Expert</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Total Project</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>60+</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Language</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>English/hindi</p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="col-md-4">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p style={{ color: "blue" }}>6 months</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
