import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";
import * as S from "./shop.styles";
import { getCollections } from "../../actions/index";
import { connect } from "react-redux";

const Shop = ({ match, getCollections }) => {
  useEffect(() => {
    getCollections();
  }, []);
  return (
    <S.Shop>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionTitle`} component={Collection} />
    </S.Shop>
  );
};

export default connect(
  null,
  { getCollections }
)(Shop);
