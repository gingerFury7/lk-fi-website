import React, { Fragment } from "react";



export const SiteFooter = () =>{
    return(
        <Fragment>
            <footer class="bg_img footer-overlay" data-background="./images/footer-bg.jpg">
                <a href="#" onClick="scroll(0,0); return false" class="banner-icon">
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
                            <h5 class="title">Полезные ссылки</h5>
                            <ul>
                                <li>
                                    <a href="#0">О нас</a>
                                </li>
                                <li>
                                    <a href="#0">История</a>
                                </li>
                                <li>
                                    <a href="#0">Часто задаваемые вопросы</a>
                                </li>
                                <li>
                                    <a href="#0">Навыки и умения</a>
                                </li>
                                <li>
                                    <a href="#0">Награда</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-widget widget-link">
                            <h5 class="title">Мои награды</h5>
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
                            <h5 class="title">Подписывайтесь на меня</h5>
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
                        <p class="m-0" >
                            &copy; Все права защищены <a href="#0">FOOTSKILL</a>
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}