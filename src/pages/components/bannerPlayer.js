import React, { Fragment, useEffect, useState } from "react"

import {observer} from "mobx-react-lite";
import axios from "axios";


export const BannerPlayer = observer(() =>{
   
    return(
        <Fragment>
            <section class="banner-section-2">
                <div class="container">
                    <div class="banner-content-2">
                        <h1 class="title">Имя Игрока</h1>
                        <h5 class="subtitle"><span>Позиция Игрока</span></h5>
                        <a href="#myhistory"  class="custom-button">Моя История</a>
                    </div>
                    <div class="banner-counter-wrapper">
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="./images/banner/01.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Все Матчи</h6>
                                <div class="counter odometer" data-odometer-final="896">0</div>
                            </div>
                        </div>
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="./images/banner/02.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Все Голы</h6>
                                <div class="counter odometer" data-odometer-final="209">0</div>
                            </div>
                        </div>
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="./images/banner/03.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Игрок Года</h6>
                                <div class="counter odometer" data-odometer-final="03">0</div>
                            </div>
                        </div>
                    </div>
                    <div class="right-text">
                        И
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
        </Fragment>
    )
})