import React from "react";
import * as S from "./menu-item.styles";
import styled from "styled-components";

const MenuItem = ({ title, imageUrl, size }) => {
  const MenuItem = styled(S.MenuItem)`
    background-image: url("${imageUrl}");
    height: ${size ? "60rem" : ""};
  `;
  return (
    <MenuItem>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </MenuItem>
  );
};

export default MenuItem;
