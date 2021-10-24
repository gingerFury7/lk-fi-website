import React, { Fragment } from "react";



export const SectionBlog = () =>{
    return(
        <Fragment>
                <section class="blog-section padding-bottom padding-top">
                    <div class="container">
                        <div class="section-header-2">
                            <h2 class="title">
                                <div class="stroke-text">Блог</div>
                                <span class="text-theme">Мой</span> <span>Блог</span>
                            </h2>
                        </div>
                        <div class="owl-theme owl-carousel tweet-slider">
                            <div class="blog-item-2">
                                <div class="blog-body">
                                    <h5 class="title"><a href="#0">Блог 1</a></h5>
                                    <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                                    <a href="#0" class="read-more"><span>Подробнее</span></a>
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
                                    <h5 class="title"><a href="#0">Блог 2</a></h5>
                                    <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                                    <a href="#0" class="read-more"><span>Подробнее</span></a>
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
                                    <h5 class="title"><a href="#0">Блог 3</a></h5>
                                    <p class="line-limit-3">Lorem Ipsum is simply dummy text of the printing and typesett repetinjected humour, or non-characteristic words </p>
                                    <a href="#0" class="read-more"><span>Подробнее</span></a>
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
        </Fragment>
    )
}