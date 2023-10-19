import { Presentation } from "./presentation"

import userAvatar from '/src/assets/kooapplogo.png'

export const Header = () => {
  const userName = "Koo Indian English"
  const userAt = "@koonenglish"
  const date = "19 Feb 2021"

  return <Presentation userName={userName} userAvatar={userAvatar} userAt={userAt} date={date} />
};
