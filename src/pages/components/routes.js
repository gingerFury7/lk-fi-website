
import { Auth } from "../Auth"
import { award } from "../award"
import PostList from "../blog"
import { blog_single } from "../blog-single"
import { Contact } from "../contact"
import { Home } from "../Home"
import  AdminPanel  from "./AdminPanel"
import { ADMIN_ROUTE, AUTH_ROUTE, AWARD_ROUTE, BLOG_ROUTE, BLOG_SINGLE_ROUTE, CONTACT_ROUTE, HOMEPAGE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"


export const authRoutes = [
    
    
]
export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component : Home
    },
    {
        path: BLOG_ROUTE,
        Component : PostList
    },
    {
        path: AWARD_ROUTE,
        Component : award  
    },
    {
        path: CONTACT_ROUTE,
        Component : Contact  
    },
    {
        path: BLOG_SINGLE_ROUTE + '/:id',
        Component : blog_single  
    },
    {
        path: AUTH_ROUTE,
        Component : Auth  
    },
    {
        path: REGISTRATION_ROUTE,
        Component : Auth  
    },
    {
        path: ADMIN_ROUTE,
        Comment: AdminPanel
    }

]