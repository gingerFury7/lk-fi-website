import React, { Fragment } from "react";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";

export const Contact =() =>{
    return(
        
           <html>
               <body>
                <SiteHeader />
<div className="contact-background">
                    <section class="hero-section">
                        <a href="#about" class="banner-icon">
                            <i class="flaticon-down-arrow"></i>
                        </a>
                        <div class="container">
                            <div class="hero-content">
                                <h1 class="title" data-bg="Contact"><span>Контактная Информация</span></h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="/home">Домашняя Страница</a>
                                    </li>
                                    <li>
                                        <span>Контакты</span>
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
                                            <h6 class="title">Адрес</h6>
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
                                            <h6 class="title">Телефон</h6>
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
                                            <h6 class="title">Почта</h6>
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
                                    <h2 class="title">Привет</h2>
                                </div>
                                <div class="content">
                                    <div class="para-header">
                                        <h2 class="title">Напишите Нам</h2>
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                                    </div>
                                    <form class="contact-form mb-30-none" id="contact_form_submit">
                                        <div class="contact-form-group">
                                            <input type="text" placeholder="Полное Имя" name="name" id="name"/>
                                        </div>
                                        <div class="contact-form-group">
                                            <input type="text" placeholder="Почта/Номер Телефона" name="email" id="email"/>
                                        </div>
                                        <div class="contact-form-group">
                                            <textarea name="message" id="message" placeholder="Сообщение"></textarea>
                                        </div>
                                        <div class="contact-form-group">
                                            <button type="submit">Подтвердить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
</div>
    <SiteFooter />
               </body>
           </html>

    )
}