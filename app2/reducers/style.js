const initialState = {
    background: 'yellow',
};

const styleReducer = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case 'SET_BACKGROUND':
            return {
                ...state,
                background: payload.background,
            };
        default:
            return state;
    }
};

export default styleReducer;
