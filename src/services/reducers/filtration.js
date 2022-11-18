const initialState = {
    enter: '',
    activeFilter: 'all'
};

const filtration = (state = initialState, action) => {
    switch (action.type) {
        case 'EMPLOYEE_SEARCH':
            return {
                ...state,
                enter: action.payload
            }
        case 'EMPLOYEES_FILTERING': {
            return {
                ...state,
                activeFilter: action.payload
            }
        }
        default: return state
    }
}

export default filtration;