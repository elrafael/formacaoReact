import { FC } from "react";
import { FooterTypes } from "./footer.types";
import { CommentInput } from "../CommentInput/index";

export const Footer: FC<FooterTypes> = ({ title }) => {
  return <CommentInput />;
};
