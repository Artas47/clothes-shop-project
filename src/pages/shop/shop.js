import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";
import * as S from "./shop.styles";

const Shop = ({ match }) => {
  return (
    <S.Shop>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionTitle`} component={Collection} />
    </S.Shop>
  );
};

export default Shop;
