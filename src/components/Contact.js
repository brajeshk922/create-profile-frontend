import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [userData, setuserData] = useState({ name: "", email: "", phone: "", message: "" });
    const userContact = async () => {
        try {
            const res = await fetch('https://create-profile-backend.herokuapp.com/getdata', {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            console.log(data);
            setuserData({ ...userData, name: data.name, email: data.email, phone: data.phone, });
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setuserData({ ...userData, [name]: value });
    }

    // message field data send to backend
    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;
        const res = await fetch('https://create-profile-backend.herokuapp.com/contact', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();
        if (!data) {
            console.log("message not send")
        } else {
            alert("message sent");
            setuserData({ ...userData, message: "" });
        }
    }

    useEffect(() => {
        userContact();
    }, [])

    return (
        <>
            <div className="d-flex justify-content-around mt-4">
                <div className={'card p-1 w-25 '}>
                    <div className={'card-titled d-flex align-items-center '}>
                        <span class="material-icons text-primary">call</span>
                        <div className={'ms-3 mt-2'}>
                            <h6>Phone</h6>
                            <p>+91 87256314</p>
                        </div>
                    </div>
                </div>

                <div className={'card p-1 w-25'}>
                    <div className={'card-titled d-flex align-items-center '}>
                        <span class="material-icons text-primary">mail_outline</span>
                        <div className={'ms-3 mt-2'}>
                            <h6>Email</h6>
                            <p>webdeveloper@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className={'card p-1 w-25'}>
                    <div className={'card-titled d-flex align-items-center '}>
                        <span class="material-icons text-primary">home</span>
                        <div className={'ms-3 mt-2'}>
                            <h6>Address</h6>
                            <p>Aligarh U.P, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container p-5 card mt-5 '}>
                <h3>Get in Touch</h3>
                <div>
                    <form method="POST">
                        <div className={'d-flex justify-content-around mt-3'}>
                            <div className={'w-25 bg-primary'}>
                                <input type='name' name='name' id='name' placeholder='your name' autoComplete='off'
                                    value={userData.name}
                                    onChange={handleInput} className={'w-100'} />
                            </div>
                            <div className={'w-25 bg-primary'}>
                                <input type='email' name='email' id='email' placeholder='your email' autoComplete='off' val
                                    value={userData.email}
                                    onChange={handleInput} className={'w-100'} />
                            </div>
                            <div className={'w-25'}>
                                <input type='number' name='phone' id='phone' placeholder='your phone' autoComplete='off' val
                                    value={userData.phone}
                                    onChange={handleInput} className={'w-100'} />
                            </div>
                        </div>
                        <textarea className="form-control mt-4" placeholder='Message...' name="message" rows='5'
                            value={userData.message}
                            onChange={handleInput}></textarea>
                        <button type="submit" onClick={contactForm} className="btn btn-primary my-3">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
