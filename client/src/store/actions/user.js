//Get Current User Details

export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/user/me");

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
