import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import * as S from "./shop.styles";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../actions/index";
import Spinner from "../../components/spinner/spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionContainer = lazy(() =>
  import("../../pages/collection/collection.container")
);

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <S.Shop>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionTitle`}
          component={CollectionContainer}
        />
      </Suspense>
    </S.Shop>
  );
};

export default connect(null, { fetchCollectionsStart })(Shop);
