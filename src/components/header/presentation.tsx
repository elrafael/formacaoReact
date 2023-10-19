import {FC} from "react";
import { HeaderOpts } from "./header.types";
import './index.scss';

export const Presentation: FC<HeaderOpts> = ({ userAvatar, userName, userAt, date }) => {
    return(
        <>
            <header>
                <div className="img">
                    <img src={userAvatar} alt="" className="avatar" />
                </div>
                <div className="userName">
                    <p>{userName}</p>
                    <small>{userAt}</small>
                </div>
                <div className="date">
                    {date}
                </div>
            </header>
        </>
    )
  };