import React from "react";
import * as S from "./collection-item.styles";
import CustomButton from "../custom-button/custom-button";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../actions/index";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <S.CollectionItem>
      <S.CollectionItemImg
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></S.CollectionItemImg>
      <S.CollectionItemFooter>
        <S.CollectionItemName>{name}</S.CollectionItemName>
        <S.CollectionItemPrice>{price}</S.CollectionItemPrice>
      </S.CollectionItemFooter>
      <CustomButton onClick={() => dispatch(addCartItem(item))} cartButton>
        ADD TO CART
      </CustomButton>
    </S.CollectionItem>
  );
};

export default CollectionItem;
