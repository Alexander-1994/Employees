const initialState = {
    list: [],
    listLoading: 'success'
};

const persons = (state = initialState, action) => {
    switch (action.type) {
        case 'EMPLOYEES_FETCHING':
            return {
                ...state,
                listLoading: 'loading'
            }
        case 'EMPLOYEES_FETCHED': 
            return {
                ...state,
                list: action.payload,
                listLoading: 'success'
            }
        case 'EMPLOYEES_FETCHING_ERROR': 
            return {
                ...state,
                listLoading: 'error'
            }
        case 'EMPLOYEES_ADD_PERSON':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'EMPLOYEES_DEL_PERSON': 
            return {
                ...state,
                list: state.list.filter(elem => elem.id !== action.payload)
            }
        case 'EMPLOYEE_TOGGLE_VALUE':
            return {
                ...state,
                list: state.list.map(elem => elem.id === action.payload ? {...elem, [action.attribute]: !elem[action.attribute]} : {...elem})
            }
        default: return state
    }
}

export default persons;