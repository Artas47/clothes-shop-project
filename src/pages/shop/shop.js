import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import * as S from "./shop.styles";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../actions/index";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../../pages/collection/collection.container";

const Shop = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);
  return (
    <S.Shop>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionTitle`}
        component={CollectionContainer}
      />
    </S.Shop>
  );
};

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(Shop);
