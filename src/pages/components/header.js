import React , {Fragment} from "react";




export const SiteHeader = () =>{
    return(
        <Fragment>
           
                        <div class="overlay"></div>
                    <a href="#0" class="scrollToTop"><i class="fas fa-angle-up"></i></a>

            {/*  <div class="preloader">
                    <div class='loader'></div>
                </div>*/}

                <header class="header-section-2">
                    <div class="container">
                        <div class="header-wrapper">
                            <div class="logo">
                                <a  href="index.html"><img src="./images/logo/logo.png" alt="logo"/></a>
                            </div>
                            <div class="follow-area">
                                <h6 class="title">Следуй за Мной</h6>
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
                                <a href="#0" class="custom-button choto">Следовать</a>
                            </div>
                            <div class="ellipsis-bar ml-auto d-lg-none">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                            <div class="header-bar" >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

            
                        </div>
                    </div>

                    <input type='checkbox' name='thing' value='valuable' id="slide-box"/>
                    <ul class="sub-nav">
                    
                                        <li>
                                            <a href="/home" class="custom-button choto py-0 d-lg-none">Домашняя страница</a>
                                        {/* <ul class="submenu">
                                                <li>
                                                    <a href="/">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="/home">Home 2</a>
                                                </li>
                                            </ul>*/}
                                        </li>
                                        <li>
                                            <a href="/blog"class="custom-button choto py-0 d-lg-none">Блог</a>
                                        </li>
                                        <li>
                                            <a href="/award" class="custom-button choto py-0 d-lg-none">Награды</a>
                                        </li>
                                        <li>
                                            <a href="/contact" class="custom-button choto py-0 d-lg-none">Контакты</a>
                                        </li>
                                        <li>
                                            <a href="#0" class="custom-button choto py-0 d-lg-none">Подписывайся</a>
                                        </li>
                                    
                            </ul>
                    
                    <div class="header-troops">
                        <div class="close-btn">
                            <i class="fas fa-times"></i>
                        </div>
                        <h6 class="title">Подписывайся</h6>
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
                
            
                <section class="sticky-test">
                    <div class="header-bottom">
                            <div class="container">
                                <div class="header-bottom-wrapper">
                                    <ul class="menu">
                                        <li>
                                            <a href="/home">Домашняя страница</a>
                                        {/* <ul class="submenu">
                                                <li>
                                                    <a href="/">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="/home">Home 2</a>
                                                </li>
                                            </ul>*/}
                                        </li>
                                        <li>
                                            <a href="/blog">Блог</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="/blog">Блог</a>
                                                </li>
                                                <li>
                                                    <a href="/blog_single">Одиночный блог</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/award">Награды</a>
                                        </li>
                                        <li>
                                            <a href="/contact">Контакты</a>
                                        </li>
                                        <li>
                                            <a href="#0" class="custom-button choto py-0 d-lg-none">Подписывайся</a>
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
                </section>
            
        </Fragment>
    )
}