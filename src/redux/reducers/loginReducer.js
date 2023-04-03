const INITIAL_STATE = {
  isConnected: false,
  token: "",
  loginError: "",
};

/**
 * A function that takes two parameters, state and action.
 * Updates the state according to the actions
 * 
 * @function
 * @name loginReducer
 * @param {Object} state - Global state
 * @param {Objet} action - Redux action
 * @returns {Object}
 */
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCEEDED":
      return {
        ...state,
        isConnected: true,
        token: action.payload.body.token,
        loginError: "",
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isConnected: false,
        token: null,
        loginError: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isConnected: false,
        token: null,
        loginError: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
