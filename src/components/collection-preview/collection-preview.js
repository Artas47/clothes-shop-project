import React from "react";
import * as S from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <S.CollectionPreview>
      <S.CollectionPreviewTitle>
        <S.CollectionPreviewLink to={`/shop/${title.toLowerCase()}`}>
          {title}
        </S.CollectionPreviewLink>
      </S.CollectionPreviewTitle>
      <S.Preview>
        {items.slice(0, 4).map(item => {
          return <CollectionItem key={item.id} item={item} />;
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
