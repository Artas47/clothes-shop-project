import React from "react";

import { connect } from "react-redux";
import * as S from "./shop.styles";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const Shop = props => {
  // const shopItems = props.shopData.map(collection => {
  //   return (
  //     <div>
  //       <S.ShopCollection>
  //         <S.ShopCollectionTitle>{collection.title}</S.ShopCollectionTitle>
  //         {collection.items.slice(0, 4).map(item => {
  //           return (
  //             <S.ShopCollectionItem>
  //               <S.ShopCollectionItemImg src={`${item.imageUrl}`} />
  //               <S.ShopCollectionItemName>{item.name}</S.ShopCollectionItemName>
  //             </S.ShopCollectionItem>
  //           );
  //         })}
  //       </S.ShopCollection>
  //     </div>
  //   );
  // });
  return (
    <div>
      {props.collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { collections: state.collections };
};

export default connect(mapStateToProps)(Shop);
