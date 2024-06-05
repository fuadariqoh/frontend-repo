const initialState = {
  notes: "",
  user: null,
  loading: false,
  value: "",
};

// Use the initialState as a default value
export default function rootReducer(state = initialState, action: any) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "GET_USER":
      return state;

    case "SET_USER":
      return {
        ...state,
        user: action.data,
        notes: action.data.notes,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.data,
      };

    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
