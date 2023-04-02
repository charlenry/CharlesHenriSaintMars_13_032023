const INITIAL_STATE = {
  isConnected: false,
  token: "",
  loginError: "",
};

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
