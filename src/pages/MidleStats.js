import  React, {useState} from "react";

export const MiddleStats = ({stats}) =>{
    /* console.log("stats",stats); */
    const [show, setShow] = useState(false);
    var middle_number = stats.length;

    var middle_hit = 0;
    var middle_jump = 0;
    var middle_reaction = 0;
    var middle_speed = 0;

    stats.map((e,i)=>{
        middle_hit = Number(middle_hit) + Number(e.Hit)
        middle_jump = Number(middle_jump) + Number(e.Jump)
        middle_reaction = Number(middle_reaction) + Number(e.Reaction)
        middle_speed = Number(middle_speed) + Number(e.Speed)
        }
    )
    if(middle_hit != 0)
    middle_hit = Math.round(Number(middle_hit)/Number(middle_number)); 
    if(middle_jump != 0)
    middle_jump = Math.round(Number(middle_jump)/Number(middle_number)); 
    if(middle_reaction != 0)
    middle_reaction = Math.round(Number(middle_reaction)/Number(middle_number)); 
    if( middle_speed != 0)
    middle_speed = Math.round(Number(middle_speed)/Number(middle_number));
    
/*     console.log("h",middle_hit) 
    console.log("j",middle_jump) 
    console.log("r",middle_reaction) 
    console.log("s",middle_speed)  */
    if(!show){
        return(
            <div className="container">
            <section className="section-header-2" style={{marginBottom: "-20px"}}>
            

                <h2 class="title" onClick={() => setShow(true)} style={{cursor:'pointer'}}>
                            <span class="text-theme" >СРЕДНИЙ РЕЗУЛЬТАТ</span>
                        </h2>
                    
            </section>
        </div>
        )
    }
     
   else{
    return(
        <div className="container">
            <section className="section-header-2" style={{marginBottom: "-20px"}}>
            
                <div  class="container ">
                        <h2 class="title" onClick={() => setShow(false)} style={{cursor:'pointer'}}>
                            <span class="text-theme" >СРЕДНИЙ РЕЗУЛЬТАТ</span>
                        </h2>
                        <div class="middle_stats-container">
                            <h3>Удар:  <span>{middle_hit}</span></h3>
                            <h3>Прыжок:  <span>{middle_jump}</span></h3>
                            <h3>Реакция:  <span>{middle_reaction}</span></h3>
                            <h3>Скорость:  <span>{middle_speed}</span></h3>
                        </div>
                    </div>
            </section>
        </div>
    )
   }
    
}