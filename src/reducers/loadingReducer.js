export default (state = true, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return !state;
    default:
      return state;
  }
};
