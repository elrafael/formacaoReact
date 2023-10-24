import thumbsup from "/src/assets/thumbup.png";
import comment from "/src/assets/comment.png";
import rekoo from "/src/assets/rekoo.png";
import whatsapp from "/src/assets/whatsapp.png";
import share from "/src/assets/share.png";
import { useState } from "react";

export function FooterActions(props) {
  const [counterLikes, setCounterLikes] = useState(0);

  const [counterComments, setCounterComments] = useState(0);

  const [counterRekoos, setCounterRekoos] = useState(0);

  function addLikesCount() {
    setCounterLikes((prev) => prev + 1);
  }

  function addCommentsCount() {
    setCounterComments((prev) => prev + 1);
  }

  function addRekoosCount() {
    setCounterRekoos((prev) => prev + 1);
  }

  return (
    <>
      {/* 
            img ok count likes | img chat count comentários img retweet count retwits img whatsapp  | img forward
            
            thumbup.png


        */}
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={thumbsup} onClick={addLikesCount} /> {counterLikes}
        </div>

        <div>
          <img src={comment} onClick={addCommentsCount} /> {counterComments}
        </div>

        <div>
          <img src={rekoo} onClick={addRekoosCount} /> {counterRekoos}
        </div>

        <div>
          <img
            src={whatsapp}
            onClick={() => {
              alert("whatsapp");
            }}
          />
        </div>

        <div>
          <img
            src={share}
            onClick={() => {
              alert("share");
            }}
          />
        </div>
      </div>
    </>
  );
}
