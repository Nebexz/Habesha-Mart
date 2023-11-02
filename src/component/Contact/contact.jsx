import React from 'react'
import './Contact.css'
export default function contact() {
    return (
        <>
            <section class="container p-5 mt-5 ">
                <h2 class="h1-responsive font-weight-bold text-center my-4 Title">Contact us</h2>
                <p class="text-center w-responsive mx-auto mb-5 text-black">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div class="row">
                    <div class="col-sm-9 mb-sm-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" className='w-60'>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="md-form mb-4">
                                        <input type="text" id="name" name="name" class="form-control" />
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="md-form">
                                        <input type="text" id="email" name="email" class="form-control" />
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>


                            </div>

                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" />
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">


                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div class="text-center text-md-left">
                            <a href='.' class="btn button w-25 py-3" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fa fa-map-marker fa-2x button"></i>
                                <p className='text-dark'>Ethiopia, Tigray, Mekelle</p>
                            </li>

                            <li><i class="fa fa-phone mt-4 fa-2x button"></i>
                                <p className='text-dark'>+ 251 966 855 900</p>
                            </li>

                            <li>
                                <i class="fa fa-envelope mt-4 fa-2x button"></i>
                                <p className='text-dark'>www.sineworknegasi38@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
