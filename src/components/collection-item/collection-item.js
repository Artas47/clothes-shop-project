import React from "react";
import * as S from "./collection-item.styles";

const CollectionItem = props => {
  return (
    <S.CollectionItem>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${props.imageUrl})`
        }}
      ></div>
      <S.CollectionItemFooter>
        <S.CollectionItemName>{props.name}</S.CollectionItemName>
        <S.CollectionItemPrice>{props.price}</S.CollectionItemPrice>
      </S.CollectionItemFooter>
    </S.CollectionItem>
  );
};

export default CollectionItem;
