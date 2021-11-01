import  React from "react";
import { useParams } from "react-router";

import { BannerPlayer } from "./components/bannerPlayer";
import { SiteHeader } from "./components/header";
import { SiteFooter } from "./components/footer";
/* import { SectionAbout } from "./components/sectionAbout";
import { SectionAwards } from "./components/sectionAwards"; */
import { SectionBlog } from "./components/sectionBlog";
/* import { SectionBlog } from "./components/sectionBlog"; */
/* import { SectionGallery } from "./components/sectionGallery"; */
/* import { SectionHistory } from "./components/sectionHistory"; */
/* import { SectionMoments } from "./components/sectionMoments"; */
/* import { SectionRecords } from "./components/sectionRecords"; */
import { Stats } from "./Stats";




export const Home = () => {

  const params = useParams()
  const it_number = params.id;

  const [player, setPlayer] = React.useState([]);
  const fetchDataPlayer = () => {
      fetch('https://cdn.lk-ft.ru/footballers')
      .then((response) => response.json())
      .then((data) => {
          setPlayer(data);
      })
  };
  React.useEffect(() => {
      fetchDataPlayer();
  }, []);
  var firstname,lastname,position;

  player.map((e,i) => {if(e.id == it_number){firstname=e.firstname ; lastname = e.lastname ; position = e.playerPosition}})
    return(
      <>
      <SiteHeader />
          <body> 
            <BannerPlayer firstname={firstname} lastname={lastname} position={position} />
           {/*  <SectionAbout /> 
            <SectionHistory />  */}
            <Stats /> 
           {/*  <SectionRecords /> 
            <SectionAwards />  */}
         {/*    <SectionGallery /> */}
           {/*  <SectionSkills /> */}
            {/* <SectionMoments /> */}
           {/*  <SectionClient />  */}
             <SectionBlog /> 
    </body>
    <SiteFooter />
    </>
    )
}





