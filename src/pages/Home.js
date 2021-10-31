import  React from "react";

import { BannerPlayer } from "./components/bannerPlayer";
import { SectionAbout } from "./components/sectionAbout";
import { SectionAwards } from "./components/sectionAwards";
import { SectionBlog } from "./components/sectionBlog";
import { SectionGallery } from "./components/sectionGallery";
import { SectionHistory } from "./components/sectionHistory";
import { SectionMoments } from "./components/sectionMoments";
import { SectionRecords } from "./components/sectionRecords";
import { Stats } from "./Stats";




export const Home = () => {
  
    return(
        
          <body>
            
            <BannerPlayer />
            <SectionAbout /> 
            <SectionHistory /> 
            <Stats /> 
            <SectionRecords /> 
            <SectionAwards /> 
            <SectionGallery />
           {/*  <SectionSkills /> */}
            <SectionMoments />
           {/*  <SectionClient />  */}
            {/* <SectionBlog />  */}
         
            
    </body>
        
    )
}





