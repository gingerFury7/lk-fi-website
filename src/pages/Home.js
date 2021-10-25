import  React, { Fragment, useContext } from "react";
import { Context } from "..";
import { BannerPlayer } from "./components/bannerPlayer";
import { SectionAbout } from "./components/sectionAbout";
import { SectionAwards } from "./components/sectionAwards";
import { SectionGallery } from "./components/sectionGallery";
import { SectionHistory } from "./components/sectionHistory";
import { SectionMoments } from "./components/sectionMoments";
import { SectionRecords } from "./components/sectionRecords";



export const Home = () => {
  const{user}= useContext(Context);
    return(
        
          <body>
            
            <BannerPlayer />
            <SectionAbout />
            <SectionHistory /> 
            <SectionRecords />
            <SectionAwards />
            <SectionGallery />
           {/*  <SectionSkills /> */}
            <SectionMoments />
           {/*  <SectionClient />  */}
          {/*   <SectionBlog /> */}
          
            
    </body>
        
    )
}
