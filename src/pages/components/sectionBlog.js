import React from "react";
import { useHistory, useParams } from "react-router";
import { SiteFooter } from "./footer";
import { SiteHeader } from "./header";
import { BLOG_SINGLE_ROUTE } from "./utils/consts";

export const SectionBlog = () =>{
  const history = useHistory()  
  const params = useParams()
  const it_number = params.id;
  


  const [posts, setPosts] = React.useState([]);
  const fetchData = () => {
    fetch('https://cdn.lk-ft.ru/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
  };
  React.useEffect(() => {
    fetchData();
  }, []);
 
  var post_arr = [];
  posts.map((e,i) => {
  post_arr.push(e);
    })

  post_arr.length=3;
  
  return(
        <>
                <section class="blog-section padding-top">
                    <div class="container">
                        <div class="section-header-2">
                            <h2 class="title">
                                <div class="stroke-text">Последние новсти</div>
                                <span class="text-theme">Новости</span>
                            </h2>
                        </div>
                        <div class="">
                        { post_arr.map((e,i) => <>
                            <div class="blog-item-2 mt-3">
                                <div class="blog-body">
                                    <h5 class="title"><a href="#0">{e.Post_Title}</a></h5>
                                    <p class="line-limit-3">{e.Post_teaser}</p>
                                    <a href="#single-post" class="read-more" onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+e.id)}><span>Подробнее</span></a>
                                </div>
                                <div class="blog-footer">
                                    <div class="author">
                                        <div class="content">
                                            <a href="#single-post" class="title"  onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+e.id)}>{e.Post_author} {e.Post_author_lastname}</a>
                                        </div>
                                    </div>
                                    <a href="#single-post" onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+e.id)}><i class="flaticon-calendar"></i>{e.Post_Date}</a>
                                </div>
                            </div>
                        </>
                        )}
                        </div>
                    </div>
                </section>
        </>
    )
}