


import thumbsup from '/src/icon/assets/thumbup.png';
import comment from '/src/icon/assets/comment.png';
import rekoo from '/src/icon/assets/rekoo.png';
import whatsapp from '/src/icon/assets/whatsapp.png';
import share from '/src/icon/assets/share.png';
import { useState } from 'react';

export function FooterActions()
{
    const [counterLikes, setcounterLikes] = useState(0);
    
    const [counterComments, setcounterComments] = useState(0);

    const [counterRekoos, setcounterRekoos] = useState(0);

    return (
   <>
     {/* 
            img ok count likes | img chat count comentários img retweet count retwits img whatsapp  | img forward
            
            thumbup.png


        */}
     <div style={{ flex: 1, flexDirection: "row" }}>
       <div>
         
         <img src={thumbsup} /> {counterLikes}
       </div>

       <div>
        
         <img src={comment} /> {counterComments}
       </div>

       <div>
         
         <img src={rekoo} /> {counterRekoos}
       </div>

       <div>
         
         <img src={whatsapp} />
       </div>

       <div>
        
         <img src={share} />
       </div>
     </div>
   </>
    )
}

