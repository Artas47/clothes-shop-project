import { connect } from "react-redux";
import { compose } from "redux";

import { getIsCollectionsLoaded } from "../../selectors/collections.selector";

import WithSpinner from "../../components/with-spinner/with-spinner";
import Collection from "./collection";

const mapStateToProps = state => {
  return {
    isLoading: !getIsCollectionsLoaded(state)
  };
};

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
