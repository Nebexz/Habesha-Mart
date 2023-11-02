import React from 'react'
import './link.css'

export default function Link() {
    
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-3 col-md-8 col-sm-8">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo mb-35">
                                        <img src='https://images.squarespace-cdn.com/content/v1/59f0a6e9f09ca487886b21e2/1527236501791-PL8UQJXN2C3M3GIMCX7R/Artboard+Landscap.png' alt="" width={100} />
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>
                                            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-social">
                                        <a className='social-media' href="t">
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                        <a className='social-media' href="y">
                                            <i className='fa fa-facebook' ></i>
                                        </a>
                                        <a className='social-media' href="y">
                                            <i className='fa fa-pinterest-p' ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick links</h4>
                                        <ul>
                                            <li>
                                                <a href="y#">Image Licensin</a>
                                            </li>
                                            <li>
                                                <a href='y'>Style Guide</a>
                                            </li>
                                            <li>
                                                <a href="y">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Shop Catagory</h4>
                                        <ul>
                                            <li>
                                                <a href="#y">Image Licensin</a>
                                            </li>
                                            <li>
                                                <a href='#y'>Style Guide</a>
                                            </li>
                                            <li>
                                                <a href="y">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Partner</h4>
                                        <ul>
                                            <li>
                                                <a href="y">Image Licensin</a>
                                            </li>
                                            <li>
                                                <a href='y'>Style Guide</a>
                                            </li>
                                            <li>
                                                <a href="y">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom-area">
                                <div className="container">
                                    <div className="footer-border">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-xl-12">
                                                <div className="footer-copy-right text-center">
                                                    <p>
                                                        Copyright © {new Date().getFullYear()} All rights reserved |
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}