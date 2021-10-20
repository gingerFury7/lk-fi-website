import  React, { Fragment } from "react";


export const Home = () => {
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
    </header>

    <section class="banner-section-2">
        <div class="container">
            <div class="banner-content-2">
                <h1 class="title">Robando kal</h1>
                <h5 class="subtitle"><span>Center-Forward</span></h5>
                <a href="#0" class="custom-button">My History</a>
            </div>
            <div class="banner-counter-wrapper">
                <div class="banner-counter-item">
                    <div class="thumb">
                        <img src="./images/banner/01.png" alt="banner"/>
                    </div>
                    <div class="content">
                        <h6 class="title">Total Matches</h6>
                        <div class="counter odometer" data-odometer-final="896">0</div>
                    </div>
                </div>
                <div class="banner-counter-item">
                    <div class="thumb">
                        <img src="./images/banner/02.png" alt="banner"/>
                    </div>
                    <div class="content">
                        <h6 class="title">Total Goals</h6>
                        <div class="counter odometer" data-odometer-final="209">0</div>
                    </div>
                </div>
                <div class="banner-counter-item">
                    <div class="thumb">
                        <img src="./images/banner/03.png" alt="banner"/>
                    </div>
                    <div class="content">
                        <h6 class="title">Player of the Year</h6>
                        <div class="counter odometer" data-odometer-final="03">0</div>
                    </div>
                </div>
            </div>
            <div class="right-text">
                R
            </div>
        </div>
        <a href="#about" class="banner-icon">
            <i class="flaticon-down-arrow"></i>
        </a>
        <div class="banner-thumb-1 d-none d-lg-block">
            <img src="./images/banner/haga.png" alt="banner"/>
        </div>
        <div class="banner-thumb-2 d-none d-lg-block">
            <img src="./images/banner/head.png" alt="banner"/>
        </div>
        <div class="banner-thumb-3 d-none d-lg-block">
            <img src="./images/banner/ball.png" alt="banner"/>
        </div>
    </section>

    <section class="about-section padding-top padding-bottom-2 pos-rel oh" id="about">
        <div class="about-thumb-2 d-none d-lg-block">
            <img src="./images/about/about-man.png" alt="about"/>
        </div>
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">About</div>
                    <span class="text-theme">About</span> <span>Me</span>
                </h2>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="about-item">
                        <div class="thumb">
                            <img src="./images/about/01.png" alt="about"/>
                        </div>
                        <div class="content">
                            <h5 class="title">Biography</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="thumb">
                            <img src="./images/about/02.png" alt="about"/>
                        </div>
                        <div class="content">
                            <h5 class="title">Award</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="thumb">
                            <img src="./images/about/03.png" alt="about"/>
                        </div>
                        <div class="content">
                            <h5 class="title">Education</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="history-section padding-top-2 padding-bottom-2">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">History</div>
                    <span class="text-theme">Player</span> <span>History</span>
                </h2>
            </div>
            <div class="history-wrapper">
                <div class="history-item-2">
                    <div class="history-thumb">
                        <img src="./images/history/01.png" alt="history"/>
                    </div>
                    <div class="history-content">
                        <h3 class="title">Early years</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
                        <ul class="common-list">
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                        </ul>
                        <a href="#0" class="custom-button">Read More</a>
                    </div>
                </div>
                <div class="history-item-2">
                    <div class="history-thumb">
                        <img src="./images/history/02.png" alt="history"/>
                    </div>
                    <div class="history-content">
                        <h3 class="title">Domestic Career</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
                        <ul class="common-list">
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                            <li>
                                Wstandard chunk of Lorem Ipsum used since the 1500s is reproduced belowi
                            </li>
                        </ul>
                        <a href="#0" class="custom-button">Read More</a>
                    </div>
                </div>
                <div class="history-item-2">
                    <div class="history-thumb">
                        <img src="./images/history/03.png" alt="history"/>
                    </div>
                    <div class="history-content">
                        <h3 class="title">international Career</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum available</p>
                        <div class="item-area">
                            <div class="item">
                                <h6 class="subtitle">Canada Football Club ( 1986 - 1999 )</h6>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum </p>
                            </div>
                            <div class="item">
                                <h6 class="subtitle">Denmark Sports (2003 - 2008 )</h6>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                            </div>
                            <div class="item">
                                <h6 class="subtitle">Denmark Sports 2003 - 2008 )</h6>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                            </div>
                        </div>
                        <a href="#0" class="custom-button">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="record-section padding-top-2 oh padding-bottom">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Record</div>
                    <span class="text-theme">My</span> <span>Record</span>
                </h2>
            </div>
            <div class="row justify-content-center mb-30-none">
                <div class="col-md-6">
                    <div class="record-item">
                        <h5 class="title">Five Consecutive Eur Max Cups</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="record-item">
                        <h5 class="title">The Fastest Goal In World Cup History</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="record-item">
                        <h5 class="title">Most Goals scored In The First Division</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="record-item">
                        <h5 class="title">Most Titles In a Calendar Year</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <div class="counter-section padding-bottom padding-top bg_img overlay-82" data-background="./images/video/counter-bg.jpg">
        <div class="container">
            <div class="counter-area">
                <div class="counter-wrapper d-flex flex-wrap mb-30-none">
                    <div class="counter-item">
                        <div class="counter-header">
                            <h2 class="title odometer" data-odometer-final="402">0</h2>
                        </div>
                        <h4 class="subtitle">Matches</h4>
                    </div>
                    <div class="counter-item">
                        <div class="counter-header">
                            <h2 class="title">0</h2><h2 class="title odometer" data-odometer-final="03">0</h2>
                        </div>
                        <h4 class="subtitle">Player of Year</h4>
                    </div>
                    <div class="counter-item">
                        <div class="counter-header">
                            <h2 class="title odometer" data-odometer-final="365">0</h2>
                        </div>
                        <h4 class="subtitle">Goals</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="award-section padding-top oh">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Award</div>
                    <span class="text-theme">Get</span> <span>Award</span>
                </h2>
            </div>
            <div class="row mb-30-none justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="award-item-2">
                        <div class="award-inner">
                            <div class="award-thumb">
                                <div class="thumb">
                                    <img src="./images/award/01.png" alt="award"/>
                                </div>
                            </div>
                            <div class="award-content">
                                <h2 class="title">03</h2>
                                <h6 class="subtitle">Player of the Year</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="award-item-2">
                        <div class="award-inner">
                            <div class="award-thumb">
                                <div class="thumb">
                                    <img src="./images/award/02.png" alt="award"/>
                                </div>
                            </div>
                            <div class="award-content">
                                <h2 class="title">01</h2>
                                <h6 class="subtitle">FIFA Best Player</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="award-item-2">
                        <div class="award-inner">
                            <div class="award-thumb">
                                <div class="thumb">
                                    <img src="./images/award/03.png" alt="award"/>
                                </div>
                            </div>
                            <div class="award-content">
                                <h2 class="title">87</h2>
                                <h6 class="subtitle">Man of the Match</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="gallery-section padding-top oh">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Gallery</div>
                    <span class="text-theme">Gallery</span> <span>Photos</span>
                </h2>
            </div>
            <div class="m--15">
                <div class="gallery-wrapper">
                    <div class="gallery-item-2">
                        <div class="gallery-inner-2">
                            <div class="gallery-content">
                                <a href="./images/gallery/g5.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                <h5 class="title">Barcebox Club</h5>
                                <span>Canada, Town City</span>
                            </div>
                            <div class="gallery-thumb-2">
                                <img src="./images/gallery/g5.jpg" alt="gallery"/>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-item-2">
                        <div class="gallery-inner-2">
                            <div class="gallery-content">
                                <a href="./images/gallery/g6.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                <h5 class="title">Barcebox Club</h5>
                                <span>Canada, Town City</span>
                            </div>
                            <div class="gallery-thumb-2">
                                <img src="./images/gallery/g6.jpg" alt="gallery"/>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-item-2">
                        <div class="gallery-inner-2">
                            <div class="gallery-content">
                                <a href="./images/gallery/g7.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                <h5 class="title">Barcebox Club</h5>
                                <span>Canada, Town City</span>
                            </div>
                            <div class="gallery-thumb-2">
                                <img src="./images/gallery/g7.jpg" alt="gallery"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="skill-section padding-top-2 padding-bottom-2 oh pos-rel">
        <div class="skill-thumb d-none d-xl-block wow fadeInUp" data-wow-duration="1s"><img src="./images/skills/skills.png" alt="skill"/></div>
        <div class="skill-ball d-none d-xl-block wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s"><img src="./images/skills/skill-ball.png" alt="skill"/></div>
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Skills</div>
                    <span class="text-theme">My</span> <span>Skills</span>
                </h2>
            </div>
            <div class="row">
                <div class="col-xl-9">
                    <div class="circle-area">
                        <div class="circle-item">
                            <div class="progress1 circle">
                                <strong></strong>
                            </div>
                            <h4 class="title">Blocking</h4>
                        </div>
                        <div class="circle-item">
                            <div class="progress2 circle">
                                <strong></strong>
                            </div>
                            <h4 class="title">Passing</h4>
                        </div>
                        <div class="circle-item">
                            <div class="progress3 circle">
                                <strong></strong>
                            </div>
                            <h4 class="title">Dribbling</h4>
                        </div>
                        <div class="circle-item">
                            <div class="progress4 circle">
                                <strong></strong>
                            </div>
                            <h4 class="title">Shooting</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="moments-section padding-bottom padding-top-2 oh">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Moments</div>
                    <span class="text-theme">Happy</span> <span>Moments</span>
                </h2>
            </div>
            <div class="row mb-40-none">
                <div class="col-lg-6 mb-40">
                    <ul class="blog-area pl-0 pr-xl-5 pr-lg-3">
                        <li>
                            <a href="#0" class="blog-item">
                                <div class="blog-thumb">
                                    <img src="./images/blog/blog1.jpg" alt="blog"/>
                                </div>
                                <div class="blog-content">
                                    <h6 class="title">Contrary to popular belief, orem Ipsum is not simply years </h6>
                                    <div class="info">
                                        <i class="flaticon-play-button"></i> <span>04:58m</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#0" class="blog-item">
                                <div class="blog-thumb">
                                    <img src="./images/blog/blog2.jpg" alt="blog"/>
                                </div>
                                <div class="blog-content">
                                    <h6 class="title">Contrary to popular belief, orem Ipsum is not simply years </h6>
                                    <div class="info">
                                        <i class="flaticon-play-button"></i> <span>04:58m</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#0" class="blog-item">
                                <div class="blog-thumb">
                                    <img src="./images/blog/blog3.jpg" alt="blog"/>
                                </div>
                                <div class="blog-content">
                                    <h6 class="title">Contrary to popular belief, orem Ipsum is not simply years </h6>
                                    <div class="info">
                                        <i class="flaticon-play-button"></i> <span>04:58m</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#0" class="blog-item">
                                <div class="blog-thumb">
                                    <img src="./images/blog/blog4.jpg" alt="blog"/>
                                </div>
                                <div class="blog-content">
                                    <h6 class="title">Contrary to popular belief, orem Ipsum is not simply years </h6>
                                    <div class="info">
                                        <i class="flaticon-play-button"></i> <span>04:58m</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 mb-40">
                    <div class="rounded-video">
                        <div class="thumb">
                            <img src="./images/video/video-bg-3.jpg" alt="blog"/>
                        </div>
                        <a href="https://www.youtube.com/watch?v=EFafSYg-PkI" class="video-button popup">
                            <i class="flaticon-play-button-arrowhead"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="client-section">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-6 px-0 theme-bg top_right_rounded d-none d-lg-block pos-rel">
                    <img class="abs-thumb" src="./images/client/man.png" alt="client"/>
                </div>
                <div class="col-lg-6 px-0">
                    <div class="client-slider-area-2 padding-top padding-bottom">
                        <div class="client-wrapper">
                            <div class="owl-theme owl-carousel client-slider fine-dots">
                                <div class="client-item">
                                    <div class="client-content">
                                        <blockquote>
                                            here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English versions from the 1914 
                                        </blockquote>
                                    </div>
                                    <div class="client-thumb">
                                        <div class="sign">
                                            <img src="./images/client/sign.png" alt="client"/>
                                        </div>
                                        <div class="cont">
                                            <h5 class="title">Mensx Deuoox</h5>
                                            <span class="info">Presidents of FIFL</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="client-item">
                                    <div class="client-content">
                                        <blockquote>
                                            here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English versions from the 1914 
                                        </blockquote>
                                    </div>
                                    <div class="client-thumb">
                                        <div class="sign">
                                            <img src="./images/client/sign.png" alt="client"/>
                                        </div>
                                        <div class="cont">
                                            <h5 class="title">Mensx Deuoox</h5>
                                            <span class="info">Presidents of FIFL</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="client-item">
                                    <div class="client-content">
                                        <blockquote>
                                            here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English versions from the 1914 
                                        </blockquote>
                                    </div>
                                    <div class="client-thumb">
                                        <div class="sign">
                                            <img src="./images/client/sign.png" alt="client"/>
                                        </div>
                                        <div class="cont">
                                            <h5 class="title">Mensx Deuoox</h5>
                                            <span class="info">Presidents of FIFL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="blog-section padding-bottom padding-top">
        <div class="container">
            <div class="section-header-2">
                <h2 class="title">
                    <div class="stroke-text">Blog</div>
                    <span class="text-theme">My</span> <span>Blog Post</span>
                </h2>
            </div>
            <div class="owl-theme owl-carousel tweet-slider">
                <div class="blog-item-2">
                    <div class="blog-body">
                        <h5 class="title"><a href="#0">There are many varians</a></h5>
                        <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                        <a href="#0" class="read-more"><span>Read More</span></a>
                    </div>
                    <div class="blog-footer">
                        <div class="author">
                            <div class="thumb">
                                <a href="#0" class="title"><img src="./images/tweet/tweet1.jpg" alt="tweet"/></a>
                            </div>
                            <div class="content">
                                <a href="#0" class="title">Mac Tyoe</a>
                            </div>
                        </div>
                        <a href="#0"><i class="flaticon-calendar"></i>05 May</a>
                    </div>
                </div>
                <div class="blog-item-2">
                    <div class="blog-body">
                        <h5 class="title"><a href="#0">Beguiled and demoral</a></h5>
                        <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                        <a href="#0" class="read-more"><span>Read More</span></a>
                    </div>
                    <div class="blog-footer">
                        <div class="author">
                            <div class="thumb">
                                <a href="#0" class="title"><img src="./images/tweet/tweet1.jpg" alt="tweet"/></a>
                            </div>
                            <div class="content">
                                <a href="#0" class="title">Mac Tyoe</a>
                            </div>
                        </div>
                        <a href="#0"><i class="flaticon-calendar"></i>05 May</a>
                    </div>
                </div>
                <div class="blog-item-2">
                    <div class="blog-body">
                        <h5 class="title"><a href="#0">Quis autem repreh ende</a></h5>
                        <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                        <a href="#0" class="read-more"><span>Read More</span></a>
                    </div>
                    <div class="blog-footer">
                        <div class="author">
                            <div class="thumb">
                                <a href="#0" class="title"><img src="./images/tweet/tweet1.jpg" alt="tweet"/></a>
                            </div>
                            <div class="content">
                                <a href="#0" class="title">Mac Tyoe</a>
                            </div>
                        </div>
                        <a href="#0"><i class="flaticon-calendar"></i>05 May</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="partner-section padding-bottom">
        <div class="container">
            <div class="partner-slider owl-theme owl-carousel">
                <div class="partner-item">
                    <img src="./images/partner/01.png" alt="partner"/>
                </div>
                <div class="partner-item">
                    <img src="./images/partner/02.png" alt="partner"/>
                </div>
                <div class="partner-item">
                    <img src="./images/partner/03.png" alt="partner"/>
                </div>
                <div class="partner-item">
                    <img src="./images/partner/04.png" alt="partner"/>
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
        </Fragment>
    )
}
