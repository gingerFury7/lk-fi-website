import  React, {  useState } from "react";
import { useHistory } from "react-router-dom";

import { BLOG_SINGLE_ROUTE } from "./components/utils/consts";
import list_posts from "./post.json";
import {observer} from "mobx-react-lite";
import axios from "axios";



const PostList = observer(()=>{

    return(
        
        <>
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
                    <div class="row justify-content-center mb-40-60-none d-flex flex-column " >
                   
                        <Pagination_Post  />
                   
                    
                  </div>
                </div>
            </section>
        </>
    );
});

 



const Post_Component = ({posts }) =>{

    const history = useHistory()
    console.log("proverka0 ",posts)
    JSON.stringify(posts);
    console.log("proverka1 ",posts )
    return(
        <>
              {
                    posts.map((e,i)=>   <div  key={i} class="col-lg-10">
                    <div class="post-item">
                        <div class="post-thumb">
                            <a href="blog-single.html">
                                <img src={'https://cdn.lk-ft.ru'+e.Post_image.url} alt="blog"/>
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="post-date">
                                <a href="#0"><i class="flaticon-clock"></i>{e.Post_Date}</a>
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
                                <a href="/blog_single">{e.Post_Title}</a>
                            </h4>
                            <p>{e.Post_teaser}</p>
                            <a href="#single-post" class="custom-button" onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+e.id)} >Подробности</a>
                        </div>
                    </div>
                </div> 
                        )
                }

        </>
    )
}  

const Pagination = ({postPerPage, totalPost , paginate}) => {
    
    const pageNumbers = [];

    console.log("leng" , totalPost)

    for(let i = 1; i <=Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
         
    }

    return(
        <nav>
            <ul class="pagination mt-4 ">
           
                {pageNumbers.map( number =>
                     
                 <li key={number}  >
                     <a onClick={() => paginate(number)} href="#about" >{number}</a>
                 </li>
                 
                 )}
               
            </ul>
        </nav>
    )
}

 function Pagination_Post(){

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

//get current post
  const  indexOfLastPost = currentPage * postPerPage;
  const  indexOfFirstPost = indexOfLastPost - postPerPage;
 

  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const fetchData = () => {
    fetch('https://cdn.lk-ft.ru/posts')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
      return <div>Загрузка...</div>;
    }

    
  
  
// Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return(
            <>
               
               <Post_Component posts={posts}  />
               <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />

        </>
        )
    
  } 

  export default PostList;