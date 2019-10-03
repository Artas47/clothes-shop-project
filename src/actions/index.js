export const fetchUser = user => {
  return {
    type: "FETCH_USER",
    payload: user
  };
};
