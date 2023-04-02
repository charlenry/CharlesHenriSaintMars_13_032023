// Login action
export const login = (email, password) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/user/login",
      options
    );

    const data = await response.json();

    dispatch({
      type: "LOGIN_SUCCEEDED",
      payload: data,
    });
    dispatch(getProfile(data.body.token));
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: error.message,
    });
  }
};


// Get user profile action
export const getProfile = (token) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      options
    );

    const data = await response.json();

    if (data.status === 401) {
      dispatch({
        type: "USER_PROFILE_EXPIRED",
        payload: data,
      });
    }

    dispatch({
      type: "USER_PROFILE_OK",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_PROFILE_FAILED",
    });
  }
};


// Edit user profile action
export const editProfile =  (token, firstName, lastName) => async (dispatch) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      options
    );

    const data = await response.json();

    dispatch({ 
      type: "USER_PROFILE_UPDATED", 
      payload: data 
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAILED",
      payload: error.message,
    });
  }
};


// Logout action
export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" })
}