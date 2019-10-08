export const getUser = (userId, userData) => {
  return {
    type: "FETCH_USER",
    payload: { userId, ...userData }
  };
};
