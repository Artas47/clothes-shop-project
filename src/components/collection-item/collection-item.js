import React from "react";
import * as S from "./collection-item.styles";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addCartItem } from "../../actions/index";

const CollectionItem = props => {
  const { item } = props;
  return (
    <S.CollectionItem>
      <S.CollectionItemImg
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></S.CollectionItemImg>
      <S.CollectionItemFooter>
        <S.CollectionItemName>{item.name}</S.CollectionItemName>
        <S.CollectionItemPrice>{item.price}</S.CollectionItemPrice>
      </S.CollectionItemFooter>
      <CustomButton onClick={() => props.addCartItem(item)} cartButton>
        ADD TO CART
      </CustomButton>
    </S.CollectionItem>
  );
};

export default connect(
  null,
  { addCartItem }
)(CollectionItem);
