import  React, { Fragment } from "react";
import { BannerPlayer } from "./components/bannerPlayer";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";
import { SectionAbout } from "./components/sectionAbout";
import { SectionAwards } from "./components/sectionAwards";
import { SectionBlog } from "./components/sectionBlog";
import { SectionClient } from "./components/sectionClient";
import { SectionGallery } from "./components/sectionGallery";
import { SectionHistory } from "./components/sectionHistory";
import { SectionMoments } from "./components/sectionMoments";
import { SectionRecords } from "./components/sectionRecords";
import { SectionSkills } from "./components/sectionSkills";
import Test_Comen from "./components/testComm/coments";


export const Home = () => {
    return(
        
          <body>
            <SiteHeader />
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
            <SiteFooter /> 
            
    </body>
        
    )
}
