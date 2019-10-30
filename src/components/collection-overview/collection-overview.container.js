import { connect } from "react-redux";
import { compose } from "redux";

import { getIsCollectionFetching } from "../../selectors/collections.selector";

import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "./collection-overview";

const mapStateToProps = state => {
  return {
    isLoading: getIsCollectionFetching(state)
  };
};

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer;
