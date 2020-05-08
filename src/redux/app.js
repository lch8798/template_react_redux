// action types
const SET_LOADED = 'app/SET_LOADED';
const SET_LOADED_SUCCESS = 'app/SET_LOADED_SUCCESS';
const SET_LOADED_FAILURE = 'app/SET_LOADED_FAILURE';

// actions
export const setLoaded = () => async (dispatch, getState) => {
    let payload = null;

    try {
        dispatch({ type: SET_LOADED });

        // await codes
        payload = 'loaded app';

        dispatch({ type: SET_LOADED_SUCCESS, payload });
    } catch (error) {
        payload = 'failed load app';
        dispatch({ type: SET_LOADED_FAILURE, payload });
    }

    return payload;
};

// default state
const initialState = {
    appState: '',
    loaded: false,
    pending: false,
};

// reducers
export default function app(state = initialState, action) {
    switch (action.type) {
        case SET_LOADED:
            return {
                ...state,
                pending: true,
            };
        case SET_LOADED_SUCCESS:
            return {
                ...state,
                appState: action.payload,
                loaded: true,
                pending: false,
            };
        case SET_LOADED_FAILURE:
            return {
                ...state,
                appState: action.payload,
                loaded: false,
                pending: false,
            };
        default:
            return state;
    }
}
