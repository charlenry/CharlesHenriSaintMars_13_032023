const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  getProfileSuccess: false,
  updateProfileSuccess: false,
  tokenHasExpired: false,
};

/**
 * A function that takes two parameters, state and action.
 * Updates the state according to the actions
 * 
 * @function
 * @name profileReducer
 * @param {Object} state - Global state
 * @param {Objet} action - Redux action
 * @returns {Object}
 */
const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_PROFILE_OK":
      return {
        ...state,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        getProfileSuccess: true,
        tokenHasExpired: false,
      };
    case "USER_PROFILE_FAILED":
      return {
        ...state,
        getProfileSuccess: false,
      };
    case "USER_PROFILE_EXPIRED":
      return {
        ...state,
        tokenHasExpired: true,
      };
    case "USER_PROFILE_UPDATED":
      return {
        ...state,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        updateProfileSuccess: true,
        tokenHasExpired: false,
      };
    case "UPDATE_PROFILE_FAILED":
      return {
        ...state,
        updateProfileSuccess: false,
      };
    case "LOGOUT":
      return {
        ...state,
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
