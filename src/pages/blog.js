import  React, { useState } from "react";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";
import list_posts from "./post.json";

/* import {ModalBlogPost} from "./blog-single"; */


export const blog =()=>{
    return(

      <>  
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
        <Pagination_Post />
        </div>
    </div>
</section>

   
    
        <SiteFooter />
</>

    )
}







const Post_Component = ({posts}) =>{

    /* const[modalActive, setModalActive] = useState(false); */
    return(
        <>
              {
                    posts.map((e,i)=> <div  key={i} class="col-lg-10">
                    <div class="post-item">
                        <div class="post-thumb">
                            <a href="blog-single.html">
                                <img src={e.img} alt="blog"/>
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="post-date">
                                <a href="#0"><i class="flaticon-clock"></i>{e.published_at}</a>
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
                                <a href="/blog_single">{e.title}</a>
                            </h4>
                            <p>{e.description}</p>
                            <a href="#0" class="custom-button" onClick={() => setModalActive(true)}>Подробности</a>
                        </div>
                        
                        {/* <ModalBlogPost posts_title={e.title} posts_rich_text={e.rich_text} posts_author_icon={e.author_icon}
                         posts_author={e.author} posts_author_description={e.author_description} posts_published_at={e.published_at}  active={modalActive} setActive={setModalActive} /> */}
                    </div>
                </div>
                        )
                }

        </>
    )
}  

const Pagination = ({postPerPage, totalPost , paginate}) => {
    
    const pageNumbers = [];


    for(let i = 1; i <=Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
         
    }

    return(
        <nav>
            <ul class="pagination mt-4">
           
                {pageNumbers.map( number =>
                     
                 <li key={number}  >
                     <a onClick={() => paginate(number)} href="#0" >{number}</a>
                 </li>
                 
                 )}
               
            </ul>
        </nav>
    )
}

export default function Pagination_Post(){

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);

//get current post
  const  indexOfLastPost = currentPage * postPerPage;
  const  indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = list_posts.posts.slice( indexOfFirstPost , indexOfLastPost);  
 

// Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return(
            <>
               
               <Post_Component posts={currentPost} />
               <Pagination postPerPage={postPerPage} totalPost={list_posts.posts.length} paginate={paginate} />

        </>
        )
    
  } 