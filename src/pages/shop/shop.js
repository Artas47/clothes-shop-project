import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";
import WithSpinner from "../../components/with-spinner/with-spinner";
import * as S from "./shop.styles";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../actions/index";
import { getIsCollectionFetching } from "../../selectors/collections.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, fetchCollectionsStartAsync, isLoading }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);
  return (
    <S.Shop>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionTitle`}
        render={props => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </S.Shop>
  );
};

const mapStateToProps = state => {
  return { isLoading: getIsCollectionFetching(state) };
};

export default connect(
  mapStateToProps,
  { fetchCollectionsStartAsync }
)(Shop);
