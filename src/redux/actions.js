/*** Login action ***/

/**
 * A function that takes two parameters, email and password, and returns a function that takes a parameter, dispatch.
 * Allows to get the credentials from the database for authentication. If success, returns a token and sends an update 
 * request of the state to the loginReducer.
 * 
 * @async
 * @function
 * @name login
 * @param {string} email
 * @param {string} password
 * @returns {function}
 */
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


/*** Get user profile action ***/

/**
 * A function that takes a parameter, token, and returns a function that takes a parameter, dispatch.
 * Allows to get the user's profile with the token got by login function and sends an update request 
 * of the state to the profileReducer.
 * 
 * @async
 * @function
 * @name login
 * @param {string} token
 * @returns {function}
 */
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


/*** Edit user profile action ***/

/**
 * A function that takes three parameters, token, firstName and lastName, and returns a function 
 * that takes a parameter, dispatch.
 * Allows to update the user's profile with the token got by login function and sends an update request 
 * of the state to the profileReducer.
 * 
 * @async
 * @function
 * @name editProfile
 * @param {string} token
 * @param {string} firstName
 * @param {string} lastName
 * @returns {function}
 */
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


/*** Logout action ***/

/**
 * A function that takes no parameters and returns a function that takes a parameter, dispatch.
 * Allows to log out by sending a request to reset the state to the loginReducer and the profileReducer. 
 * @async
 * @function
 * @name logout
 * @returns {function}
 */
export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" })
}