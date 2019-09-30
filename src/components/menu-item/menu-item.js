import React from "react";
import * as S from "./menu-item.styles";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  imageUrl,
  size,
  history /*we can use history cuz of withrouter HOC */,
  linkUrl
}) => {
  const MenuItem = styled(S.MenuItem)`
    height: ${size ? "60rem" : ""};
    :after{
      background: url("${imageUrl}");
      background-size: cover;
      background-position: center;
    }
  `;
  return (
    <MenuItem onClick={() => history.push(`/${linkUrl}`)}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </MenuItem>
  );
};

export default withRouter(MenuItem);
