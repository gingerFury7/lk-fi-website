import React, { Fragment } from "react";

export const Contact =() =>{
    return(
        <Fragment>
           <html>
               <body>
               <div class="overlay"></div>
    <a href="#0" class="scrollToTop"><i class="fas fa-angle-up"></i></a>

    <div class="preloader">
        <div class='loader'></div>
    </div>

    <header class="header-section-2">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.html"><img src="./images/logo/logo.png" alt="logo"/></a>
                </div>
                <div class="follow-area">
                    <h6 class="title">Follow Me</h6>
                    <ul class="social-icons justify-content-start choto">
                        <li>
                            <a href="#0"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="header-right d-none d-lg-block">
                    <a href="#0" class="custom-button choto">Follow Me</a>
                </div>
                <div class="ellipsis-bar ml-auto d-lg-none">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="header-bottom-wrapper">
                    <ul class="menu">
                        <li>
                            <a href="#0">Home</a>
                            <ul class="submenu">
                                <li>
                                    <a href="/">Home 1</a>
                                </li>
                                <li>
                                    <a href="/home">Home 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#0">Blog</a>
                            <ul class="submenu">
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/blog?single">Blog Single</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/award">awards</a>
                        </li>
                        <li>
                            <a href="/contact">contact</a>
                        </li>
                        <li>
                            <a href="#0" class="custom-button choto py-0 d-lg-none">Follow Me</a>
                        </li>
                    </ul>
                    <form class="header-search-form d-none d-lg-flex">
                        <input type="text" placeholder="Search Keyword"/>
                        <button type="submit">
                            <i class="flaticon-search-interface-symbol"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="header-troops">
            <div class="close-btn">
                <i class="fas fa-times"></i>
            </div>
            <h6 class="title">Follow Me</h6>
            <ul class="social-icons justify-content-start choto">
                <li>
                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#0"><i class="fab fa-instagram"></i></a>
                </li>
            </ul>
            <form class="header-search-form">
                <input type="text" placeholder="Search Keyword"/>
                <button type="submit">
                    <i class="flaticon-search-interface-symbol"></i>
                </button>
            </form>
        </div>
        <div class="star-area oh">
            <div class="stars boro"></div>
        </div>
    </header>

    <section class="hero-section">
        <a href="#about" class="banner-icon">
            <i class="flaticon-down-arrow"></i>
        </a>
        <div class="container">
            <div class="hero-content">
                <h1 class="title" data-bg="Contact"><span>Contact with me</span></h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <div class="contact-info-section padding-top padding-bottom" id="about">
        <div class="container">
            <div class="row mb-30-none justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info-item">
                        <div class="contact-info-thumb">
                            <img src="./images/contact/01.png" alt="contact"/>
                        </div>
                        <div class="contact-info-content">
                            <h6 class="title">Address</h6>
                            <ul>
                                <li>6th Forrest Ray,Manhattan NYC 10001, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info-item">
                        <div class="contact-info-thumb">
                            <img src="./images/contact/02.png" alt="contact"/>
                        </div>
                        <div class="contact-info-content">
                            <h6 class="title">Phone</h6>
                            <ul>
                                <li><a href="Tel:999999999994">0000 - 8888 - 666</a></li>
                                <li><a href="Tel:999999999994">0000 - 9999 - 333</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info-item">
                        <div class="contact-info-thumb">
                            <img src="./images/contact/03.png" alt="contact"/>
                        </div>
                        <div class="contact-info-content">
                            <h6 class="title">Email</h6>
                            <ul>
                                <li><a href="Mailto:demo@gmail.com">demolink@gmail.com</a></li>
                                <li><a href="Mailto:demo@gmail.com">textline@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-info-section padding-bottom">
        <div class="container">
            <div class="contact-wrapper">
                <div class="hello">
                    <h2 class="title">Hello</h2>
                </div>
                <div class="content">
                    <div class="para-header">
                        <h2 class="title">With Me</h2>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                    <form class="contact-form mb-30-none" id="contact_form_submit">
                        <div class="contact-form-group">
                            <input type="text" placeholder="Full Name" name="name" id="name"/>
                        </div>
                        <div class="contact-form-group">
                            <input type="text" placeholder="Email/Phone Number" name="email" id="email"/>
                        </div>
                        <div class="contact-form-group">
                            <textarea name="message" id="message" placeholder="Type Message"></textarea>
                        </div>
                        <div class="contact-form-group">
                            <button type="submit">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <footer class="bg_img footer-overlay" data-background="./images/footer-bg.jpg">
        <a href="#0" class="banner-icon">
            <i class="flaticon-up-arrow-angle"></i>
        </a>
        <div class="footer-shape-bg bg_img" data-background="./images/footer-shape.png"></div>
        <div class="container">
            <div class="footer-area">
                <div class="footer-widget widget-about">
                    <div class="logo">
                        <img src="./images/logo/logo.png" alt="logo"/>
                    </div>
                    <p>Dempor pede libero dapi useu class venenatis ut bibendum quam ut nibh necm. NonhonPede mollis vel vitae dorpis Sed odio ultrices id, est eu mauris.</p>
                </div>
                <div class="footer-widget widget-link">
                    <h5 class="title">Useful Link</h5>
                    <ul>
                        <li>
                            <a href="#0">About Us</a>
                        </li>
                        <li>
                            <a href="#0">History</a>
                        </li>
                        <li>
                            <a href="#0">Faqs</a>
                        </li>
                        <li>
                            <a href="#0">Skills</a>
                        </li>
                        <li>
                            <a href="#0">Award</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-widget widget-link">
                    <h5 class="title">My Awards</h5>
                    <ul>
                        <li>
                            <a href="#0">FIFA The Best</a>
                        </li>
                        <li>
                            <a href="#0">MOTM</a>
                        </li>
                        <li>
                            <a href="#0">Uefa The Best</a>
                        </li>
                        <li>
                            <a href="#0">POTY</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-widget widget-follow">
                    <h5 class="title">Follow Me</h5>
                    <p>At vero eos et accusamus eiusto odio dignissimos ducimus qui blanditiis praesentium voltatum </p>
                    <ul class="social-icons choto">
                        <li>
                            <a href="#0"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p class="m-0">
                    &copy; All Right Reserved By <a href="#0">Viserlab</a>
                </p>
            </div>
        </div>
    </footer>
               </body>
           </html>
        </Fragment>
    )
}