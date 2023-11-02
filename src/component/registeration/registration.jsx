import React from 'react'
import './register.css'

export default function registration() {
    return (
        <section>
            <div className="login-bg mt-5">
                <div className="register-form-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="register-form text-center">
                                    <div className="register-heading">
                                        <span>Sign Up</span>
                                        <p>Create Your account to get full accecc</p>
                                    </div>
                                    <div className="input-box">
                                        <div className="single-input-fields">
                                            <label htmlFor="">Full name</label>
                                            <input type="text" placeholder='Enter full name' />
                                        </div>
                                        <div className="single-input-fields">
                                            <label htmlFor="">Email Address</label>
                                            <input type="email" placeholder='Enter email address' />
                                        </div>
                                        <div className="single-input-fields">
                                            <label htmlFor="">Password</label>
                                            <input type="password" placeholder='Enter password' />
                                        </div>
                                        <div className="single-input-fields">
                                            <label htmlFor="Confirm Password">Confirm Password</label>
                                            <input type="password" placeholder='Confirm Password' />
                                        </div>
                                    </div>
                                    <div className="register-footer">
                                        <p>Already have an account <a href="/login"> Login </a> here</p>
                                        <button className="submit-btn3">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
