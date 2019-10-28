import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";
import WithSpinner from "../../components/with-spinner/with-spinner";
import * as S from "./shop.styles";
import { connect } from "react-redux";
import {
  firestore,
  covertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { fetchCollections } from "../../actions/index";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, fetchCollections }) => {
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      fetchCollections(collectionsMap);
      setLoading(false);
    });
  }, []);
  return (
    <S.Shop>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionTitle`}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </S.Shop>
  );
};

export default connect(
  null,
  { fetchCollections }
)(Shop);
