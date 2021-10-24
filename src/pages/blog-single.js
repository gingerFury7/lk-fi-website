import React, { Fragment } from "react";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";
import Test_Comen from "./components/testComm/coments";

export const blog_single = () =>{
    return(
        <Fragment>
            
            <SiteHeader />

    <section class="hero-section">
        <a href="#about" class="banner-icon">
            <i class="flaticon-down-arrow"></i>
        </a>
        <div class="container">
            <div class="hero-content">
                <h1 class="title" data-bg="БЛОГ"><span>Подробности Блога</span></h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="/">Домашняя Страница</a>
                    </li>
                    <li>
                        <span>Подробности Блога</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="blog-section padding-top padding-bottom" id="about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="post-item post-details">
                        <div class="post-thumb">
                            <img src="./images/blog/blog5.jpg" alt="blog"/>
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
                                Sollicitudin augue morbma lesuadad ignisim
                            </h4>
                            <p>Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus v
                                estibulumviverra fusce justo, quisque id porttitor ullamcor</p>
                            <p> condimentum morbi, et dui consequat, elit dui morbi quis. Elit ad commodo pede lectus vulputate, leo nunc nibh suscipit ut ut, vel massa, pellentesque non ipsum. Nulla in venenatis donec, amet vestibulum interdum justo id. Eget vestibulum in lacinia massa turpis, hac cursus dapibus aliquam ac pede, rhoncus  semper. Pellentesque erat, blandit orci vestibulum en, pellentesque felis viverra in pellent
                                esque dolor, est Massa sed sed congue velit, tortor mattis vestibulum et elit n
                                ec nunc, hymenaeos sed ullamcorper non, ipsum </p>
                            <blockquote>
                                One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.
                            </blockquote>
                            <p>
                                Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor
                            </p>
                            <p>
                                condimentum morbi, et dui consequat, elit dui morbi quis. Elit ad commodo pede lectus vulputate, leo nunc nibh suscipit ut ut, vel massa, pellentesque non ipsum. Nulla in venenatis donec, amet vestibulum interdum justo id. Eget vestibulum in lacinia massa turpis, hac cursus dapibus aliquam ac pede, rhoncus  semper. Pellentesque erat, blandit orci vestibulum en, pellentesque felis viverra in pellent
                                esque dolor, est Massa sed sed congue velit, tortor mattis vestibulum et elit n
                                ec nunc, hymenaeos sed ullamcorper non, ipsum 
                            </p>
                        </div>
                    </div>
                    <div class="post-author">
                        <div class="thumb">
                            <img src="./images/blog/author.png" alt="blog"/>
                        </div>
                        <h6 class="title">Martin Hook</h6>
                        <span class="info">Автор</span>
                        <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                    </div>
                    <div class="comment-wrapper">
                        <h3 class="m-title"><span>Комен</span>тарии (18)</h3>
                        <ul class="comment-area">
                            <li>
                                <div class="comment-item">
                                    <div class="comment-thumb">
                                        <a href="#0"><img src="./images/blog/aut1.png" alt="blog"/></a>
                                    </div>
                                    <div class="comment-content">
                                        <h6 class="title"><a href="#0">David James <span>15 hours ago</span></a></h6>
                                        <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                        <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="comment-item">
                                            <div class="comment-thumb">
                                                <a href="#0"><img src="./images/blog/aut2.png" alt="blog"/></a>
                                            </div>
                                            <div class="comment-content">
                                                <h6 class="title"><a href="#0">Injamamul Haque <span>15 hours ago</span></a></h6>
                                                <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                                <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="comment-item">
                                    <div class="comment-thumb">
                                        <a href="#0"><img src="./images/blog/aut3.png" alt="blog"/></a>
                                    </div>
                                    <div class="comment-content">
                                        <h6 class="title"><a href="#0">Mahadi Khan <span>15 hours ago</span></a></h6>
                                        <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                        <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="comment-wrapper">
                        <h3 class="m-title"><span>Оставить</span> Комментарий</h3>
                        <form class="contact-form mb-30-none">
                            <div class="contact-form-group">
                                <input type="text" placeholder="Полное Имя" name="name"/>
                            </div>
                            <div class="contact-form-group">
                                <input type="text" placeholder="Email/Номер Телефона" name="email"/>
                            </div>
                            <div class="contact-form-group">
                                <textarea name="message" id="message" placeholder="Оставить Комментарий"></textarea>
                            </div>
                            <div class="contact-form-group">
                                <button type="submit">Опубликовать</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <Test_Comen/>
  */}
    <SiteFooter /> 
    
        </Fragment>
    )
}
