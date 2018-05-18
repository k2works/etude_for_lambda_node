import Immutable from "immutable";

import { SAY_HELLO } from "../action/hello";

const initialState = Immutable.fromJS({
    message: "Initial reducer message",
});

const helloReducer = (state = initialState, action) => {
    switch (action.type) {
    case SAY_HELLO:
        return state.set("message", action.payload);
    default:
        return state;
    }
};

export default helloReducer;
