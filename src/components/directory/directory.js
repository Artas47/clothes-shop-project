import React from "react";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import * as S from "./directory.styles.js";
import { getSections } from "../../selectors/sections.selector";

const Directory = props => {
  return (
    <S.DirectoryMenu>
      {props.sections.map(({ id, imageUrl, title, size, linkUrl }) => {
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

const mapStateToProps = state => {
  return { sections: getSections(state) };
};

export default connect(mapStateToProps)(Directory);
