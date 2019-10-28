import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { getCollection } from "../../selectors/collection.selector";
import * as S from "./collection.styles";

const Collection = ({ collection }) => {
  if (!collection) {
    return (
      <S.CollectionNotFound>
        Page not found...{console.log("coll", collection)}
      </S.CollectionNotFound>
    );
  }
  return (
    <S.Collection>
      {console.log("col", collection)}
      <S.CollectionTitle>{collection.title}</S.CollectionTitle>
      <S.CollectionItems>
        {collection.items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </S.CollectionItems>
    </S.Collection>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (!state.shopData.collections) {
    return {};
  }
  return {
    collection: getCollection(state, ownProps)
  };
};

export default connect(mapStateToProps)(Collection);
