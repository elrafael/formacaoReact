import { FC, useState, ChangeEvent } from "react";
import { CommentInputTypes } from "./CommentInput.types";
import './index.css'

export const CommentInput: FC<CommentInputTypes> = ({ input }) => {
  const [inp, setInp] = useState<string>(input ? input.toString() : "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="fcomment"
          name="fcomment"
          value={inp}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
