import  React, { Fragment } from "react";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";


export const blog =()=>{
    return(

<Fragment>
        
        <SiteHeader />

<section class="hero-section">
    <a href="#about" class="banner-icon">
        <i class="flaticon-down-arrow"></i>
    </a>
    <div class="container">
        <div class="hero-content">
            <h1 class="title" data-bg="БЛОГ"><span>Последние Новости</span></h1>
            <ul class="breadcrumb">
                <li>
                    <a href="/">Домашняя Страница</a>
                </li>
                <li>
                    <span>Блог</span>
                </li>
            </ul>
        </div>
    </div>
</section>

<section class="blog-section padding-top padding-bottom" id="about">
    <div class="container">
        <div class="row justify-content-center mb-40-60-none">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
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

   
    
        <SiteFooter />
</Fragment>

    )
}



export const BlogPost = () =>{
    return (
        <Fragment>
            <div class="col-lg-10">
                        <div class="post-item">
                            <div class="post-thumb">
                                <a href="blog-single.html">
                                    <img src="./images/blog/blog7.jpg" alt="blog"/>
                                </a>
                            </div>
                            <div class="post-content">
                                <div class="post-date">
                                    <a href="#0"><i class="flaticon-clock"></i>25 Декабря</a>
                                </div>
                                <ul class="post-tags">
                                    <li>
                                        <a href="#0">Видео</a>
                                    </li>
                                    <li>
                                        <a href="#0">Invest Ment</a>
                                    </li>
                                    <li>
                                        <a href="#0">Фильм</a>
                                    </li>
                                </ul>
                                <h4 class="title">
                                    <a href="blog-single.html">Predefined chunks as necessary making first true genss</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                    estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                                <a href="blog-single.html" class="custom-button">Подробности</a>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}