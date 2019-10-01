import React from "react";
import * as S from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <S.CollectionPreview>
      <S.CollectionPreviewTitle>{title}</S.CollectionPreviewTitle>
      <S.Preview>
        {items.slice(0, 4).map(item => {
          return (
            <CollectionItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </S.Preview>
    </S.CollectionPreview>
    // <div>
    //   {items.map(item => {
    //     return (
    //       <div>
    //         {item.name}
    //         <img src={item.imageUrl} />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default CollectionPreview;
