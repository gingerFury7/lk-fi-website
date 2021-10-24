import { formatRFC3339 } from "date-fns";
import React, { Fragment } from "react";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";





export const award = () =>{
    return(
        <Fragment>
            <SiteHeader />

    <section class="hero-section">
        <a href="#about" class="banner-icon">
            <i class="flaticon-down-arrow"></i>
        </a>
        <div class="container">
            <div class="hero-content">
                <h1 class="title" data-bg="Награды"><span>Награды</span></h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="/home">Домашняя Страница</a>
                    </li>
                    <li>
                        <span>Награды</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="record-section padding-top padding-bottom" id="about">
        <div class="container">
            <div class="mb-30-none">
                {/* <Slider /> */}
                <Award_Component2 />
                <Award_Component />
                <Award_Component2 />
                <Award_Component />
                <Award_Component2 />

                {/* <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/02.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 01
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">FIFA the Best Player</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div>
                <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/03.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 97
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">Man of the Match</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div>
                <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/04.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 03
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">UEFA Champions League Champions</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div>
                <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/05.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 01
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">Copa Del Rey Champions</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div> */}
            </div>
            <ul class="pagination">
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

export const Award_Component = () => {
    return(
        <>
            <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/01.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 03
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">Название Награды</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div>
        </>
    )
}

export const Award_Component2 = () => {
    return(
        <>
            <div class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src="./images/award/01.png" alt="award"/>
                        </div>
                        <div class="cont">
                            <span>x</span> 03
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">Название Награды2</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                    </div>
                </div>
        </>
    )
}







/* export default function Slider() {
    const wordsArray = ["Название Награды 1", "Название Награды 2","Награда 3"];
    const imgArray= ["./images/award/01.png","./images/award/05.png","./images/award/03.png"];
    const textArray=["Текст 1" , "Текст 2", "Текст 3"];
    let curIndex = 0;
    let imgDuration = 3000;
  
    function slideShow() {
      if (document.getElementById("award-item")) {
        document.getElementById("image-slider").className += "fadeOut";
        setTimeout(function() {
          return(  document.getElementById("image-slider").src = imgArray[curIndex]
            )
          
        }, 1000);
      }
      curIndex++;
      if (curIndex === imgArray.length) {
        curIndex = 0;
      }
      setTimeout(slideShow, imgDuration);
    }
    slideShow();

    return (
        <>
        <div class="award-item">
                <div class="award-thumb">
                    <div class="thumb">
                        <img id="image-slider" src="./images/award/01.png" alt="award"/>
                    </div>
                    <div class="cont">
                        <span>x</span> 03
                    </div>
                </div>
                <div class="award-content">
                    <h4 class="title">{ wordsArray[curIndex] }</h4>
                    <p>{textArray[curIndex]}</p>
                </div>
            </div>
    </>
    );
  } */