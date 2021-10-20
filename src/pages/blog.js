import  React, { Fragment } from "react";


export const blog =()=>{
    return(

<Fragment>
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
                    <h1 class="title" data-bg="Blog"><span>Latest Post</span></h1>
                    <ul class="breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Blog</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="blog-section padding-top padding-bottom" id="about">
            <div class="container">
                <div class="row justify-content-center mb-40-60-none">
                    <div class="col-lg-10">
                        <div class="post-item">
                            <div class="post-thumb">
                                <a href="blog-single.html">
                                    <img src="./images/blog/blog5.jpg" alt="blog"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <div class="post-date">
                                    <a href="#0"><i class="flaticon-clock"></i>25 December</a>
                                </div>
                                <ul class="post-tags">
                                    <li>
                                        <a href="#0">Video</a>
                                    </li>
                                    <li>
                                        <a href="#0">Invest Ment</a>
                                    </li>
                                    <li>
                                        <a href="#0">Movie</a>
                                    </li>
                                </ul>
                                <h4 class="title">
                                    <a href="blog-single.html">Sollicitudin augue morbma lesuadad ignisim</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                    estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                                <a href="blog-single.html" class="custom-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="post-item">
                            <div class="post-thumb">
                                <a href="blog-single.html">
                                    <img src="./public/images/blog/blog6.jpg" alt="blog"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <div class="post-date">
                                    <a href="#0"><i class="flaticon-clock"></i>25 December</a>
                                </div>
                                <ul class="post-tags">
                                    <li>
                                        <a href="#0">Video</a>
                                    </li>
                                    <li>
                                        <a href="#0">Invest Ment</a>
                                    </li>
                                    <li>
                                        <a href="#0">Movie</a>
                                    </li>
                                </ul>
                                <h4 class="title">
                                    <a href="blog-single.html">Contrary to popular belief, Loremis not simply random text.</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                    estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                                <a href="blog-single.html" class="custom-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="post-item">
                            <div class="post-thumb">
                                <a href="blog-single.html">
                                    <img src="./images/blog/blog7.jpg" alt="blog"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <div class="post-date">
                                    <a href="#0"><i class="flaticon-clock"></i>25 December</a>
                                </div>
                                <ul class="post-tags">
                                    <li>
                                        <a href="#0">Video</a>
                                    </li>
                                    <li>
                                        <a href="#0">Invest Ment</a>
                                    </li>
                                    <li>
                                        <a href="#0">Movie</a>
                                    </li>
                                </ul>
                                <h4 class="title">
                                    <a href="blog-single.html">Predefined chunks as necessary making first true genss</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                    estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                                <a href="blog-single.html" class="custom-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="post-item">
                            <div class="post-thumb">
                                <a href="blog-single.html">
                                    <img src="./images/blog/blog8.jpg" alt="blog"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <div class="post-date">
                                    <a href="#0"><i class="flaticon-clock"></i>25 December</a>
                                </div>
                                <ul class="post-tags">
                                    <li>
                                        <a href="#0">Video</a>
                                    </li>
                                    <li>
                                        <a href="#0">Invest Ment</a>
                                    </li>
                                    <li>
                                        <a href="#0">Movie</a>
                                    </li>
                                </ul>
                                <h4 class="title">
                                    <a href="blog-single.html">Sollicitudin augue morbma lesuadad ignisim</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                    estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                                <a href="blog-single.html" class="custom-button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="pagination mt-4">
                    <li class="arrows disabled">
                        <span><i class="flaticon-angle-pointing-to-left"></i></span>
                    </li>
                    <li>
                        <a href="#0">01</a>
                    </li>
                    <li>
                        <span>02</span>
                    </li>
                    <li>
                        <a href="#0">03</a>
                    </li>
                    <li class="arrows">
                        <a href="#0"><i class="flaticon-angle-arrow-pointing-to-right"></i></a>
                    </li>
                </ul>
            </div>
        </section>

    
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
</Fragment>

    )
}