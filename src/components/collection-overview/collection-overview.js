import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { getCollections } from "../../selectors/collections.selector";

const CollectionOverview = props => {
  return (
    <div>
      {props.collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { collections: getCollections(state) };
};

export default connect(mapStateToProps)(CollectionOverview);
