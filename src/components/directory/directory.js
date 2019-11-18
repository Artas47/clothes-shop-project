import React from "react";
import MenuItem from "../menu-item/menu-item";
import { useSelector } from "react-redux";
import * as S from "./directory.styles.js";
import { getSections } from "../../selectors/sections.selector";

const Directory = () => {
  const sections = useSelector(getSections);
  return (
    <S.DirectoryMenu>
      {sections.map(({ id, imageUrl, title, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            title={title}
            size={size}
            linkUrl={linkUrl}
          />
        );
      })}
    </S.DirectoryMenu>
  );
};

export default Directory;
