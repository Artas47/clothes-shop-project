import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { getCollection } from "../../selectors/collection.selector";
import * as S from "./collection.styles";

const Collection = ({ collection }) => {
  if (!collection) {
    return <S.CollectionNotFound>Page not found...</S.CollectionNotFound>;
  }
  return (
    <S.Collection>
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
  return {
    collection: getCollection(ownProps.match.params.collectionTitle)(state)
  };
};

export default connect(mapStateToProps)(Collection);
