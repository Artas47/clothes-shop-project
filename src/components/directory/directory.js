import React from "react";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import * as S from "./directory.styles.js";

const Directory = props => {
  return (
    <S.DirectoryMenu>
      {props.sections.map(({ id, imageUrl, title, size }) => {
        return (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        );
      })}
    </S.DirectoryMenu>
  );
};

const mapStateToProps = state => {
  return { sections: state.sections };
};

export default connect(mapStateToProps)(Directory);
